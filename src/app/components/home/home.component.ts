import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <p>
      Hola app-css
  </p>
  <hr>
  <app-class></app-class>
  <br>
  <p [appResaltado]="'orange'">
      Directiva
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles:[]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
