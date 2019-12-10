import { SidenavService } from './../../../../services/sidenav.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.sidenavService.publish('close');
  }
}
