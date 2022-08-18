import { Component, ContentChild, Input } from '@angular/core';
import { TextFieldRefDirective } from './directives/text-field-ref.directive';
import { TextFieldType } from './values/text-field-type.enum';
import { Icon } from '@shared/components/icon';

@Component({
  selector: 'text-field, [text-field]',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() type = TextFieldType.TEXT;
  @Input() error = '';

  @ContentChild(TextFieldRefDirective)
  textField?: TextFieldRefDirective;

  icons = Icon;
  isShowPassword = false;

  get isPasswordFiled() {
    return this.type === TextFieldType.PASSWORD;
  }

  get isInvalid() {
    return this.textField?.isInvalid;
  }

  get isValid() {
    return this.textField?.isValid;
  }

  get hasFocus() {
    return this.textField?.hasFocus;
  }

  onHidePassword() {
    this.isShowPassword = !this.isShowPassword;

    const newElementType = this.isShowPassword ? 'text' : 'password';
    this.textField?.nativeElement.setAttribute('type', newElementType);
  }
}
