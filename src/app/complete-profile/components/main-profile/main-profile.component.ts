import {CompleteProfileService} from './../../services/complete-profile.service';
import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatListItem} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

declare var $: any;

@Component({selector: 'app-main-profile', templateUrl: './main-profile.component.html', styleUrls: ['./main-profile.component.scss']})
export class MainProfileComponent implements OnInit {
    public index = 0;
    public currentScreen : string = 'personalInformationResult';

    @ViewChild('tabBtn0', {static: true})currentTab;
    @ViewChildren(MatListItem)buttons : QueryList<any>;

    constructor(private completeProfileService : CompleteProfileService, private toastr : ToastrService) {}

    ngOnInit() {}

    profileLinksClickHandler(elm, index) {
        this.buttons.forEach(button => {
            button._element.nativeElement.classList.remove('active');
        });
        this.currentTab = elm;
        elm._element.nativeElement.classList.add('active');
        this.index = index;
    }

    profileNextHandler(currentTab, index : number) {
        if (index == 1) {
            this.currentScreen = 'personalInformationResult';
            this.completeProfileService.subjectPersonalInfoFlag.next(true);
        } else if (index == 2) {
            this.currentScreen = 'nationalAddressResult';
            this.completeProfileService.subjectNationalAddressFlag.next(true);
        }
        this.checkSubscribeStatus(currentTab, index);
    }

    checkSubscribeStatus(currentTab, index : number) {
        if (index == 1) {
            this.completeProfileService.getSubjectPersonalInfoFlag().subscribe((res : any) => {
                if (res == true) {
                    this.checkRequest(currentTab, index);
                }
            });
        } else if (index == 2) {
            this.completeProfileService.getSubjectNationalAddressFlag().subscribe((res:any)=>{
                if (res == true) {
                    this.checkRequest(currentTab, index);
                } 
            })
        }


    }

    checkRequest(currentTab, index : number) {
        this.completeProfileService.postProfile(this.completeProfileService.completeProfileObject).subscribe((res : any) => {
            if (res.response[this.currentScreen] == 'success') {
                this.toastr.success('well done .. keep going', 'Success');
                this.goNextPage(currentTab, index);
            }
        },(error:any)=>{
            this.toastr.error('Try again later','Error');
        })
    }

    goNextPage(currentTab, index : number) {
        let currentTabIndex = 0;
        const tabsArray = this.buttons.toArray();
        currentTabIndex = tabsArray.findIndex(button => {
            return button === currentTab;
        });
        this.profileLinksClickHandler(tabsArray[currentTabIndex + 1], index);
    }


}
