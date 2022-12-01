import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { CardButtonComponent } from '@shared/components/card/components/card-button/card-button.component';
import { IconModule } from '@shared/components/icon';
import { LazyImageDirective } from '@shared/directives/lazy-image';

@NgModule({
  declarations: [CardComponent, CardButtonComponent],
  imports: [CommonModule, IconModule, LazyImageDirective, NgOptimizedImage],
  exports: [CardComponent],
})
export class CardModule {}
