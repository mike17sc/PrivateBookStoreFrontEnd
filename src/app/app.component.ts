import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <div *ngIf="connected == 'false';else test">
      test
    </div>
    <ng-template #test>test2</ng-template>
    <h1>{{title}} {{hassanText}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  connected="false";
  title = 'Tour of Heroes';
  public hassanText = 'Hassan is cool';
}
