import { UtilitiesService } from './../../shared/services/utilities.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteProfileService {

  public completeProfileObject = {
    personalData:{},
    nationalAddress:{},
    qualificationDetails:{},
    experienceDetails:{},
    bankInfo:{},
    familyProfile:{},
    medicalAppointment:{},
    uploadDocs:{},
    conflictInterest:{},
    policyAgreement:{}
  }
  public subjectPersonalInfoFlag = new Subject;
  public subjectNationalAddressFlag = new BehaviorSubject<boolean>(false);

  constructor(private utilitiesService:UtilitiesService,private httpClient:HttpClient) { }
  getSubjectPersonalInfoFlag(): Observable<any> {
    return this.subjectPersonalInfoFlag.asObservable();
  }
  getSubjectNationalAddressFlag(): Observable<any> {
    return this.subjectNationalAddressFlag.asObservable();
  }
  postProfile(data){
   return this.utilitiesService.post(`restv2/projectEJOnboardingServices.restful.completeProfile:completeprofile/ej/en/completeProfile/${Math.floor(Math.random() * 101)}`,data);
  }
  

}
