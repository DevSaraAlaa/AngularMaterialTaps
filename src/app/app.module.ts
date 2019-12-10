import { AddEducationComponent } from './complete-profile/components/main-profile/profile-qualifications/add-education/add-education.component';
import { AddCertificateComponent } from './complete-profile/components/main-profile/profile-qualifications/add-certificate/add-certificate.component';
import { AddExperienceComponent } from './complete-profile/components/main-profile/profile-experience/add-experience/add-experience.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ToastrModule } from "ngx-toastr";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AddExperienceComponent,
    AddCertificateComponent,
    AddEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
        AddExperienceComponent,
    AddCertificateComponent,
    AddEducationComponent
  ]
})
export class AppModule {
}
