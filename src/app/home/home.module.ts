import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component'
import {HomeRoutingModule} from './home-routing.module';
import { GiftingComponent } from './gifting/gifting.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
    GiftingComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
