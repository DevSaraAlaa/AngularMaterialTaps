import { SidenavService } from './../../../../services/sidenav.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  closeSidenav() {
    this.sidenavService.publish('close');
  }
}
