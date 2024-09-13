import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FeesdetailsService } from 'src/app/services/feesdetails.service';

@Component({
  selector: 'app-feesdeposit',
  templateUrl: './feesdeposit.component.html',
  styleUrls: ['./feesdeposit.component.css'],
})
export class FeesdepositComponent implements OnInit {
  data: any;
  studentId: any;
  feesForm!: FormGroup;
  studentFeesDetails: any;
  studentDetails: any;
  tabledata: boolean = false;
  TotalFees: any = 0;
  TotalPendingFess: any = 0;
  feesPaid: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private feesdetailsservice: FeesdetailsService
  ) {}

  ngOnInit() {
    this.feesForm = this.fb.group({
      studentID: [''],
      feesAmount: [''],
      paymentType: [''],
      transactionReferenceNumber: [''],
      paymentDate: [''],
      remark: ['Academic Fees'],
    });
  }

  getStudentDetails() {
    if (this.studentId) {
      const apiUrl = 'http://localhost:3000/StudentData';

      this.http.get(apiUrl).subscribe(
        (data: any) => {
          const student = data.find(
            (s: any) =>
              s.studentDetails.studentID.toString().toLowerCase() ===
              this.studentId.toString().toLowerCase()
          );

          if (student) {
            this.studentDetails = student;
            this.getStudentFeesDetails();
            this.feesForm.reset({ remark: 'Academic Fees' });
            this.tabledata = true;
          } else {
            console.log('Student not found');
            this.tabledata = false;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  getStudentFeesDetails() {
    if (this.studentId) {
      const apiUrl = 'http://localhost:3000/StudentFeesDetails';

      this.http.get(apiUrl).subscribe(
        (data: any) => {
          // Filter the data based on the student ID
          this.studentFeesDetails = data.filter(
            (s: any) =>
              s.studentId.toString().toLowerCase() ===
              this.studentId.toString().toLowerCase()
          );

          if (this.studentFeesDetails.length > 0) {
            this.TotalFees = this.studentFeesDetails.reduce(
              (total: number, feeDetail: any) => total + feeDetail.feesAmount,
              0
            );

            this.feesPaid = this.TotalFees;
            const courseFees = parseInt(
              this.studentDetails.admissionCourseDetails.courseFees
            );

            this.TotalPendingFess = courseFees - this.feesPaid;
            console.log(courseFees);
            console.log(this.feesPaid);
          } else {
            console.log('No fees details found for the given student ID.');
            this.TotalPendingFess = 0;
            this.feesPaid = 0;
            this.TotalFees = 0;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  generateTransactionId(): string {
    const randomPart = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();
    return `acmi${randomPart}`;
  }

  submitFees() {
    const FeesTransaction = {
      studentId: this.feesForm.value.studentID,
      feesAmount: this.feesForm.value.feesAmount,
      paymentType: this.feesForm.value.paymentType,
      transactionReferenceNumber:
        this.feesForm.value.transactionReferenceNumber,
      paymentDate: this.feesForm.value.paymentDate,
      remark: this.feesForm.value.remark,
      clgTransactionID: this.generateTransactionId(),
    };
    if (this.feesForm.valid) {
      this.feesdetailsservice.postData(FeesTransaction).subscribe(
        (res) => {
          console.log('success');
          this.getStudentDetails();
          this.feesForm.reset({ remark: 'Academic Fees' });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Please Enter Valid Details');
    }
  }
}
