import { Component } from '@angular/core';

@Component({
  selector: 'app-admindetail',
  templateUrl: './admindetail.component.html',
  styleUrls: ['./admindetail.component.css']
})
export class AdmindetailComponent {

data:any;
 constructor(){
  this.data = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

}

}
