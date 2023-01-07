import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { IconModule } from '@shared/components/icon';
import { LazyImageDirective } from '@shared/directives/lazy-image';
import { UserListsControlsComponent } from './components/user-lists-controls/user-lists-controls.component';

@NgModule({
  declarations: [CardComponent, UserListsControlsComponent],
  imports: [CommonModule, IconModule, LazyImageDirective, NgOptimizedImage],
  exports: [CardComponent],
})
export class CardModule {}
