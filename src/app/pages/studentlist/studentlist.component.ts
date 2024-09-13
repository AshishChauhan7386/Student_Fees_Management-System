import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StudentdataService } from 'src/app/services/studentdata.service';

import { MatDialog } from '@angular/material/dialog';
import { StudentviewComponent } from 'src/app/popup/studentview/studentview.component';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent implements OnInit, AfterViewInit {
  studentData: any[] = [];
  displayedColumns: string[] = [
    'position',
    'StudentName',
    'StudentID',
    'Course',
    'Action',
  ];
  dataSource = new MatTableDataSource<any>(this.studentData);
  viewStudentdata: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private studentService: StudentdataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.showStoredData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showStoredData() {
    this.studentService.getData().subscribe(
      (data: any) => {
        this.studentData = data;
        this.dataSource.data = this.studentData;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  viewstudent(data: any) {
    this.viewStudentdata = data;
    this.dialog.open(StudentviewComponent, {
      width: '80%',
      height: '100vh',

      data: this.viewStudentdata,
    });
  }
}
