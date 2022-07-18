import { Component, ContentChild, Input } from '@angular/core';
import { TextFieldRefDirective } from '@shared/components/text-field/directives/text-field-ref.directive';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import * as Icons  from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'text-field, [text-field]',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() type = TextFieldType.TEXT;

  @ContentChild(TextFieldRefDirective)
  textField?: TextFieldRefDirective;

  icons = Icons;
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
