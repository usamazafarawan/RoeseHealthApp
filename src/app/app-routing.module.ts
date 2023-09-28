import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildShelterExamComponent } from './child-shelter-exam/child-shelter-exam.component';
import { CliaWaivedFormComponent } from './clia-waived-form/clia-waived-form.component';
import { EliteFormComponent } from './elite-form/elite-form.component';
import { InHouseTestFormComponent } from './inhouse-test-form/inhouse-test-form.component';
import { MedicarePreventiveFormComponent } from './medicare-preventive-form/medicare-preventive-form.component';
import { PhysicianOrderFormComponent } from './physician-order-form/physician-order-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  // {
  //   path: '',
  //   component: AppComponent
  // },
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }