import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextFieldComponent } from './text-field.component';
import { TextFieldRefDirective } from './directives/text-field-ref.directive';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [TextFieldComponent, TextFieldRefDirective],
  imports: [CommonModule, IconModule],
  exports: [TextFieldComponent, TextFieldRefDirective],
})
export class TextFieldModule {}
