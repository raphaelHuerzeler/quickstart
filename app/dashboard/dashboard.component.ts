import {Component} from 'angular2/core';

@Component({
  selector: 'dashboard',
  templateUrl: '/app/dashboard/dashboard.component.html'
})
export class DashboardComponent {
  articles: String[];

  constructor() {
    this.articles = ["first","second","third"];
  }
}
