import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextFieldComponent } from './text-field.component';
import { TextFieldRefDirective } from './directives/text-field-ref.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TextFieldComponent, TextFieldRefDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [TextFieldComponent, TextFieldRefDirective],
})
export class TextFieldModule {}
