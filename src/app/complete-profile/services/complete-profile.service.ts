import {UtilitiesService} from '../../shared/services/utilities.service';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompleteProfileService {

  public completeProfileObject = {
    personalData: {},
    nationalAddress: {},
    qualificationDetails: {},
    experienceDetails: {},
    bankInfo: {},
    familyProfile: {},
    medicalAppointment: {},
    uploadDocs: {},
    conflictInterest: {},
    policyAgreement: {},
  };
  public subjectPersonalInfoSubmitted = new BehaviorSubject(null);
  public subjectPersonalInfoFlag = new BehaviorSubject(null);
  public subjectNationalAddressFlag = new BehaviorSubject<boolean>(false);

  constructor(private utilitiesService: UtilitiesService) {
  }

  getSubjectPersonalInfoFlag(): Observable<any> {
    return this.subjectPersonalInfoFlag.pipe(
      filter(data => data !== null)
    );
  }

  getSubjectPersonalInfoSubmitted(): Observable<any> {
    return this.subjectPersonalInfoSubmitted.pipe(
      filter(data => data !== null)
    );
  }

  getSubjectNationalAddressFlag(): Observable<any> {
    return this.subjectNationalAddressFlag.asObservable();
  }

  postProfile(data) {
    return of({response: {personalInformationResult: 'success'}});
    // return this.utilitiesService.post(
    //   `restv2/projectEJOnboardingServices.restful.completeProfile:completeprofile/ej/en/completeProfile/` +
    //   `${Math.floor(Math.random() * 101)}`
    //   ,
    //   data
    // );
  }


}
