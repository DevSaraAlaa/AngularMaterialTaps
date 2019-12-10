import { SidenavService } from './complete-profile/services/sidenav.service';
import { AddEducationComponent } from './complete-profile/components/main-profile/profile-qualifications/add-education/add-education.component';
import { AddCertificateComponent } from './complete-profile/components/main-profile/profile-qualifications/add-certificate/add-certificate.component';
import { AddExperienceComponent } from './complete-profile/components/main-profile/profile-experience/add-experience/add-experience.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav;
  sidenavContent;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
    this.sidenavService.subject.subscribe((value: any) => {
      if (value.componentName) {
        switch (value.componentName) {
          case 'experience':
            this.sidenavContent = AddExperienceComponent;
            break;
          case 'certificate':
            this.sidenavContent = AddCertificateComponent;
            break;
          case 'education':
            this.sidenavContent = AddEducationComponent;
            break;
          default:
            break;
        }
      }

      if (value.eventName === 'open') {
        this.openSidenav();
      } else if (value.eventName === 'close') {
        this.closeSidenav();
      }
    });
  }

  ngAfterViewInit() {
    // set sidenav view container reference at as the first thing when view is
    // available
    // this.sidenavService.setSidenavVCRef(this.vc);
  }

  private openSidenav() {
    this.sidenav.toggle();
  }

  private closeSidenav() {
    this.sidenav.close();
  }

  openSN() {
    this.sidenav.publish('open', 'Component A');
  }


}
