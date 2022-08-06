import { Component } from '@angular/core';
import { slideInAnimation } from '@shared/animations/slide-in.animation';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  animations: [slideInAnimation],
})
export class AuthLayoutComponent {}
