import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  constructor(private router: Router) {}
  navigateToGifting() {
    this.router.navigate(['/home/gifting']);
  }

  navigateToWorkshop(){
    this.router.navigate(['/home/workshop']);
  }

  navigateToCurriculum(){
    this.router.navigate(['/home/curriculum']);
  }
}
