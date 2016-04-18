import {Component} from 'angular2/core';
import {DashboardComponent} from './../dashboard/dashboard.component';

@Component({
    selector: 'core',
    templateUrl: '/app/core/core.component.html',
    directives: [
      DashboardComponent
    ]
})
export class CoreComponent {
  title: String;

  constructor() {
    this.title = "PostingEngine";
  }
}
