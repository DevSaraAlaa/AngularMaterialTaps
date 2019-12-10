import { ToastrService } from 'ngx-toastr';
import {  Subscription } from 'rxjs';
import { CompleteProfileService } from './../../../services/complete-profile.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit, OnDestroy{
  public addressInfoForm: FormGroup;
  private httpSubscription: Subscription = new Subscription();
  constructor( 
              private fb: FormBuilder,
              private completeProfileService:CompleteProfileService,
              private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.addressInfoForm = this.fb.group({
      city: [''],
      district: [''],
      streetName: [''],
      buildingNumber: [''],
      postalCode: [''],
      additionalNumber: [''],
    });

    this.saveAddressInfoForm();
  }

  saveAddressInfoForm(){
    this.httpSubscription = this.completeProfileService
    .getSubjectPersonalInfoFlag()
    .subscribe((res: any) => {
      if (res == true) {
        if(this.addressInfoForm.valid){
          this.completeProfileService.completeProfileObject.nationalAddress = this.addressInfoForm.value;      
        }else{
          this.toastr.error('complete required fields','Error');
          this.httpSubscription.unsubscribe();
        }
      }
    });
  }
  ngOnDestroy(){
    this.httpSubscription.unsubscribe();
  }

  }



