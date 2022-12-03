import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton/skeleton.component';

@Component({
  selector: 'card-skeleton, [card-skeleton]',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  template: ` <skeleton class="card-skeleton" [animated]="true"></skeleton> `,
  styleUrls: ['./card-skeleton.component.scss'],
})
export class CardSkeletonComponent {}
