import { SidenavService } from './../../../../services/sidenav.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss']
})
export class AddCertificateComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  closeSidenav() {
    this.sidenavService.publish('close');
  }
}
