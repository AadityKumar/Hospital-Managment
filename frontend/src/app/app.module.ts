import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmgFormComponent } from './emg-form/emg-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { PaComponent } from './pa/pa.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CallEmgComponent } from './call-emg/call-emg.component';
import { MacrosComponent } from './macros/macros.component';
import { AdminComponent } from './admin/admin.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DocAdmComponent } from './doc-adm/doc-adm.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatFormComponent } from './pat-form/pat-form.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { FixAppComponent } from './fix-app/fix-app.component';
import { ReadAppComponent } from './read-app/read-app.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorsComponent,
    AboutUsComponent,
    EmgFormComponent,
    PagenotfoundComponent,
    FooterComponent,
    BannerComponent,
    LatestArticlesComponent,
    PaComponent,
    AboutPageComponent,
    CallEmgComponent,
    MacrosComponent,
    AdminComponent,
    DocAdmComponent,
    DoctorComponent,
    PatFormComponent,
    DocViewComponent,
    FixAppComponent,
    ReadAppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
