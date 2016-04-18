import {Component} from 'angular2/core';

@Component({
    selector: 'core',
    templateUrl: '/app/core.component.html'
})
export class CoreComponent {
  title: String;

  constructor() {
    this.title = "PostingEngine";
  }
}
