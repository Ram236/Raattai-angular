import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component'
import {HomeRoutingModule} from './home-routing.module';
import { GiftingComponent } from './gifting/gifting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
    GiftingComponent,
    ContactUsComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
