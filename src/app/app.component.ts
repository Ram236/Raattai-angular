import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoader = false;
  title = 'raattai_ui';
  constructor(private as:AppService){
    this.as.loadingSubObs.pipe(delay(0)).subscribe(data=>{
      this.showLoader = data;
    })
  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('user')?true:false;
    this.as.setLogin(isLoggedIn);
  }
}
