import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <modal-container></modal-container>
    <toast-container></toast-container>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
