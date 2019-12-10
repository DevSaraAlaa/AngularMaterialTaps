import { MaterialModule } from './../material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileRoutingModule } from './complete-profile-routing.module';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileTabComponent } from './components/main-profile/profile-tab/profile-tab.component';
import { BasicInfoComponent } from './components/main-profile/basic-info/basic-info.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddressInfoComponent } from './components/main-profile/address-info/address-info.component';
import { ProfileQualificationsComponent } from './components/main-profile/profile-qualifications/profile-qualifications.component';
import { ProfileExperienceComponent } from './components/main-profile/profile-experience/profile-experience.component';
import { BankInfoComponent } from './components/main-profile/bank-info/bank-info.component';
import { FamilyProfileComponent } from './components/main-profile/family-profile/family-profile.component';
import { MedicalAppointmentComponent } from './components/main-profile/medical-appointment/medical-appointment.component';
import { UploadDocsComponent } from './components/main-profile/upload-docs/upload-docs.component';
import { ConflictIntereprojectomponent } from './components/main-profile/conflict-interest/conflict-interest.component';
import { PolicyAgreementComponent } from './components/main-profile/policy-agreement/policy-agreement.component';


@NgModule({
  declarations: [
    MainProfileComponent,
    ProfileTabComponent,
     BasicInfoComponent,
     AddressInfoComponent,
     ProfileQualificationsComponent,
     ProfileExperienceComponent,
     BankInfoComponent,
     FamilyProfileComponent,
     MedicalAppointmentComponent,
     UploadDocsComponent,
     ConflictIntereprojectomponent,
     PolicyAgreementComponent,
  ],
    imports: [
    CommonModule,
    CompleteProfileRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompleteProfileModule { }
