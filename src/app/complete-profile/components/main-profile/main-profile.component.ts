import {CompleteProfileService} from '../../services/complete-profile.service';
import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatListItem} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({selector: 'app-main-profile', templateUrl: './main-profile.component.html', styleUrls: ['./main-profile.component.scss']})
export class MainProfileComponent implements OnInit {
  public index = 0;
  public currentScreen = 'personalInformationResult';

  @ViewChild('tabBtn0', {static: true}) currentTab;
  @ViewChildren(MatListItem) buttons: QueryList<any>;

  constructor(
    private completeProfileService: CompleteProfileService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
  }

  profileLinksClickHandler(elm, index) {
    this.buttons.forEach(button => {
      button._element.nativeElement.classList.remove('active');
    });
    this.currentTab = elm;
    elm._element.nativeElement.classList.add('active');
    this.index = index;
  }

  profileNextHandler(currentTab, index: number) {
    if (index === 1) {
      this.currentScreen = 'personalInformationResult';
      this.completeProfileService.subjectPersonalInfoFlag.next(true);
    } else if (index === 2) {
      this.currentScreen = 'nationalAddressResult';
      this.completeProfileService.subjectNationalAddressFlag.next(true);
    }
    this.checkSubscribeStatus(currentTab, index);
  }

  checkSubscribeStatus(currentTab, index: number) {
    if (index === 1) {
      this.completeProfileService.getSubjectPersonalInfoSubmitted().subscribe((res) => {
        if (res === true) {
          this.checkRequest(currentTab, index);
        }
      });
    } else if (index === 2) {
      this.completeProfileService.getSubjectNationalAddressFlag().subscribe((res) => {
        if (res === true) {
          this.checkRequest(currentTab, index);
        }
      });
    }
  }

  checkRequest(currentTab, index: number) {
    this.completeProfileService.postProfile(this.completeProfileService.completeProfileObject).subscribe((res) => {
      if (res.response[this.currentScreen] === 'success') {
        this.toastr.success('well done .. keep going', 'Success');
        this.goNextPage(currentTab, index);
      }
    }, () => {
      this.toastr.error('Try again later', 'Error');
    });
  }

  goNextPage(currentTab, index: number) {
    const tabsArray = this.buttons.toArray();
    const currentTabIndex = tabsArray.findIndex(button => {
      return button === currentTab;
    });
    this.profileLinksClickHandler(tabsArray[currentTabIndex + 1], index);
  }


}
