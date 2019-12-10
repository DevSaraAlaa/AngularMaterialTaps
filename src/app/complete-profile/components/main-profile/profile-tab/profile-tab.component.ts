import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.scss']
})
export class ProfileTabComponent implements OnInit {
  @Input() index = 0;

  constructor() { }

  ngOnInit() {
  }

}
