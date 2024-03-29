import { ToastrService } from 'ngx-toastr';
import {  Subscription } from 'rxjs';
import { CompleteProfileService } from './../../../services/complete-profile.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit,OnDestroy {
  public basicInfoForm: FormGroup;
  private httpSubscription: Subscription = new Subscription();
  constructor(  private fb: FormBuilder,
                private completeProfileService:CompleteProfileService,
                private toastr: ToastrService
            ) { }

  ngOnInit() {
    this.basicInfoForm = this.fb.group({
      firstNameEN: ['test'],
      firstNameAR: ['', Validators.required],
      fatherNameEN: [''],
      fatherNameAR: ['', Validators.required],
      grandFatherNameEN: [''],
      grandFatherNameAR: ['', Validators.required],
      familyNameEN: [''],
      familyNameAR: [''],
      nationality: ['test'],
      govIdPlaceOfIssue: [''],
      govIdDateOfIssue: [''],
      governmentId: ['585'],
      gender: ['Male'],
      religion: [''],
      gregorianBOD: ['11/11/2020'],
      hijriBOD: ['11/11/2020'],
      birthPlace: [''],
      bloodType: [''],
      passport: [''],
      mobileNumber: ['', Validators.required],
      email: [''],
      maritalStatus: [''],
      childrenNumber: [''],
    });
    this.saveBasicInfoForm();

  }
  private saveBasicInfoForm(){
    this.httpSubscription = this.completeProfileService
    .getSubjectPersonalInfoFlag()
    .subscribe((res: any) => {
      if (res == true) {
        if(this.basicInfoForm.valid){
          this.completeProfileService.completeProfileObject.personalData = this.basicInfoForm.value; 
        }else{
          this.completeProfileService.subjectPersonalInfoFlag.unsubscribe();
          this.toastr.error('complete required fields','Error');
        }
    
      }
    });
  }

  ngOnDestroy(){
    this.httpSubscription.unsubscribe();
  }
  
}
