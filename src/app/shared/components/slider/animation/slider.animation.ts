import { animate, style, transition, trigger } from '@angular/animations';

export const sliderAnimation = (name: string) => {
  return trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-in-out', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('400ms ease-in-out', style({ opacity: 0 })),
    ]),
  ]);
};
