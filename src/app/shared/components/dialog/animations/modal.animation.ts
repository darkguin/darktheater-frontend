import { animate, style, transition, trigger } from '@angular/animations';

export const modalAnimation = () => {
  const startState = { opacity: 0, transform: 'scale(0%)' };
  const endState = { opacity: 1, transform: 'scale(100%)' };

  return trigger('modalAnimation', [
    transition(':enter', [style(startState), animate('500ms ease-out', style(endState))]),
    transition(':leave', [style(endState), animate('500ms ease-in', style(startState))]),
  ]);
};
