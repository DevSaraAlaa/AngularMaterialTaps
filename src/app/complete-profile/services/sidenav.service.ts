import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public subject = new Subject<{}>();

  constructor() {
  }

  publish(eventName: string, componentName?: string) {
    this.subject.next({eventName, componentName});
  }

}
