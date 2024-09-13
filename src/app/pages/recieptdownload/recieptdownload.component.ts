
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recieptdownload',
  templateUrl: './recieptdownload.component.html',
  styleUrls: ['./recieptdownload.component.css']
})
export class RecieptdownloadComponent {
  studentfees: any;
  studentFeesDetails: any;
  studentDetails: any;
  noData: boolean = false;

  constructor(private http: HttpClient) {}

  getStudentFees() {
    if (this.studentfees) {
      const apiUrl = 'http://localhost:3000/StudentFeesDetails';

      this.http.get(apiUrl).subscribe(
        (data: any) => {
 
         
          this.studentFeesDetails = data.filter(
            (feeDetail: any) => feeDetail.studentId.toLowerCase() === this.studentfees.toLowerCase()
          );

          this.checkNoData();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }



 private checkNoData() {
  this.noData = this.studentFeesDetails.length === 0;
  }
}
