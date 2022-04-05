import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { DocAdmComponent } from './doc-adm/doc-adm.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EmgFormComponent } from './emg-form/emg-form.component';
import { FixAppComponent } from './fix-app/fix-app.component';
import { HomeComponent } from './home/home.component';
import { PaComponent } from './pa/pa.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PatFormComponent } from './pat-form/pat-form.component';
import { ReadAppComponent } from './read-app/read-app.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'doctors', component:DoctorsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'emg', component:EmgFormComponent},
  {path:'pa', component:PaComponent},
  {path:'admin', component:AdminComponent},
  {path:'docadm', component:DocAdmComponent},
  {path:'patdoc', component:DoctorComponent},
  {path:'pat-for', component:PatFormComponent},
  {path:'doc-view', component:DocViewComponent},
  {path:'fix-app', component:FixAppComponent},
  {path:'read-app', component:ReadAppComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
