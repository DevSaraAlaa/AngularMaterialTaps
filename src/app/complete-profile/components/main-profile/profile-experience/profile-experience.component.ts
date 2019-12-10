import { SidenavService } from './../../../services/sidenav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss']
})
export class ProfileExperienceComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }
  openSideNav() {
    this.sidenavService.publish('open', 'experience');
  }
}
