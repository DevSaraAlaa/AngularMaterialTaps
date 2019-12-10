import { UtilitiesService } from './../../shared/services/utilities.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(private utilitiesService:UtilitiesService) { }

  getLoggedUserProfile(){
    return this.utilitiesService.get('http://10.21.130.198:9120/restv2/projectEJOnboardingServices.restful.userProfile:userProfile/ej/en/userProfile/4');
  }
}
