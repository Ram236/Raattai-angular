import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GiftingComponent } from './gifting/gifting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WeavingCurriculumComponent } from './weaving-curriculum/weaving-curriculum.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'gifting',
    component:GiftingComponent
  },
  {
    path: 'contact-us',
    component:ContactUsComponent
  },
  {
    path: 'workshop',
    component:WorkshopsComponent
  },
  {
    path: 'curriculum',
    component:WeavingCurriculumComponent
  },
  {
    path: 'about-us',
    component:AboutusComponent
  },
  {
    path: 'services',
    component:ServicesComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { 

}
