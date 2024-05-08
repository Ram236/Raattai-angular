import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails:any

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user')!)
    console.log(this.userDetails);
  }
}
