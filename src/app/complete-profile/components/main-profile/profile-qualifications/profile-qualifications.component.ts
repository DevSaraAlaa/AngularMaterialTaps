import { SidenavService } from './../../../services/sidenav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-qualifications',
  templateUrl: './profile-qualifications.component.html',
  styleUrls: ['./profile-qualifications.component.scss']
})
export class ProfileQualificationsComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  openSideNav(sidenavName) {
    this.sidenavService.publish('open', sidenavName);
  }

}


