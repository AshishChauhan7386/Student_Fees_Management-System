import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { StudentdataService } from 'src/app/services/studentdata.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent implements OnInit {
  admissionForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentservice: StudentdataService
  ) {}
  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      studentDetails: this.fb.group({
        studentName: ['', Validators.required],
        fatherName: ['', Validators.required],
        motherName: ['', Validators.required],
        studentcontactnumber: ['', Validators.required],
        fathercontactnumber: ['', Validators.required],
        aadharcard: ['', Validators.required],
        dob: ['', Validators.required],
        permanentaddress: ['', Validators.required],
        emailid: ['', Validators.required],
        gender: ['', Validators.required],
        category: ['', Validators.required],
        nationality: ['', Validators.required],
        studentID:""
      
      }),

      admissionCourseDetails: this.fb.group({
        coursetype: ['UnderGraduate', Validators.required],
        courseName: ['', Validators.required],
        academicSession: ['', Validators.required],
        courseFees: ['', Validators.required],
      }),

      qualification12thDetails: this.fb.group({
        qualification12thYear: ['', Validators.required],
        qualification12thSchoolName: ['', Validators.required],
        qualification12thPercentage: ['', Validators.required],
        qualification12thBoard: ['', Validators.required],
      }),

      qualification10thDetails: this.fb.group({
        qualification10thYear: ['', Validators.required],
        qualification10thSchoolName: ['', Validators.required],
        qualification10thPercentage: ['', Validators.required],
        qualification10thBoard: ['', Validators.required],
      }),

      resgistrationFeesDetails: this.fb.group({
        feesType: ['No Refundable Amount', Validators.required],
        registrationAmount: ['', Validators.required],
        paymentType: ['', Validators.required],
        transactionReferenceNumber: ['', Validators.required],
        paymentDate: ['', Validators.required],
        remark: ['Registration Fees', Validators.required],
      }),
      feesTransaction:this.fb.array([

      ])
    });
  }
  onSubmit() {
    if (this.admissionForm.valid) {
      const studentDetails = this.admissionForm.get('studentDetails');
      if (studentDetails) {
        const studentName = studentDetails.get('studentName')?.value || '';
        const contactNumber = studentDetails.get('studentcontactnumber')?.value || '';
        const adharCard = studentDetails.get('aadharcard')?.value || '';
     const customStudentID = `${studentName.substring(0, 3)}${contactNumber.substring(0, 4)}${adharCard.substring(0, 4)}`.toUpperCase();
     studentDetails.get('studentID')?.setValue(customStudentID);
      }






      this.studentservice.postData(this.admissionForm.value).subscribe(
        (res) => {
          alert('form submit');
        },
        (error) => {
          console.log(error);

          this.resetForm();
        }
      );
      this.resetForm();
    } else {
      alert('Please Fill Valid Details!');
    }
  }

  resetForm() {
    this.admissionForm.reset();
    Object.keys(this.admissionForm.controls).forEach((key) => {
      this.admissionForm.get(key)?.setValue(null);
    });

    const studentDetailsControl = this.admissionForm.get('studentDetails');
    if (studentDetailsControl instanceof FormGroup) {
      Object.keys(studentDetailsControl.controls).forEach((key) => {
        const control = studentDetailsControl.get(key);
        if (control) {
          control.setValue(null);
        }
      });
    }

    const admissionCourseDetails = this.admissionForm.get(
      'admissionCourseDetails'
    );
    if (admissionCourseDetails instanceof FormGroup) {
      Object.keys(admissionCourseDetails.controls).forEach((key) => {
        const control = admissionCourseDetails.get(key);
        if (control) {
          control.setValue(null);
        }
      });
    }

    const qualification12thDetails = this.admissionForm.get(
      'qualification12thDetails'
    );
    if (qualification12thDetails instanceof FormGroup) {
      Object.keys(qualification12thDetails.controls).forEach((key) => {
        const control = qualification12thDetails.get(key);
        if (control) {
          control.setValue(null);
        }
      });
    }

    const qualification10thDetails = this.admissionForm.get(
      'qualification10thDetails'
    );
    if (qualification10thDetails instanceof FormGroup) {
      Object.keys(qualification10thDetails.controls).forEach((key) => {
        const control = qualification10thDetails.get(key);
        if (control) {
          control.setValue(null);
        }
      });
    }
    const resgistrationFeesDetails = this.admissionForm.get(
      'resgistrationFeesDetails'
    );
    if (resgistrationFeesDetails instanceof FormGroup) {
      Object.keys(resgistrationFeesDetails.controls).forEach((key) => {
        const control = resgistrationFeesDetails.get(key);
        if (control) {
          control.setValue(null);
        }
      });
    }
  }

  UGcourse = [
    {
      value: 'Bachelor of Computer Applications (BCA)',
      viewValue: 'Bachelor of Computer Applications (BCA)',
    },
    {
      value: 'Bachelor of Business Administration (BBA)',
      viewValue: 'Bachelor of Business Administration (BBA)',
    },
    {
      value: 'Bachelor of Education (b.ed)',
      viewValue: 'Bachelor of Education (b.ed)',
    },
    {
      value: 'Bachelor of Commerce (b.com)',
      viewValue: 'Bachelor of Commerce (b.com)',
    },
  ];
}
