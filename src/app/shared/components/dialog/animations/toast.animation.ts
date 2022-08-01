import { animate, style, transition, trigger } from '@angular/animations';

export const toastAnimation = () => {
  const startState = { opacity: 0, transform: 'scale(0%)' };
  const endState = { opacity: 1, transform: 'scale(100%)' };

  return trigger('toastAnimation', [
    transition(':enter', [style(startState), animate('1s ease-out', style(endState))]),
    transition(':leave', [style(endState), animate('1s ease-in', style(startState))]),
  ]);
};
