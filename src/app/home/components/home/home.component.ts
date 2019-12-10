import { LoggedUserService } from './../../services/logged-user.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {FormBuilder,FormGroup,FormControl,Validators} from "@angular/forms";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private loggedUserService:LoggedUserService) { 

  }


  ngOnInit() {

    this.getLoggedUserProfile();

  }

  getLoggedUserProfile(){
    return this.loggedUserService.getLoggedUserProfile().subscribe((res:any)=>{
      console.warn(res);
    });
  }

}
