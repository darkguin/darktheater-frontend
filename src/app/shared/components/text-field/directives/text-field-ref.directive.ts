import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[textFieldRef]',
})
export class TextFieldRefDirective {
  private focus = false;

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

  @HostBinding('class')
  elementClass = 'text-field';

  @HostBinding('class.text-field--focus')
  get hasFocus() {
    return this.focus;
  }

  get isInvalid() {
    return this.nativeElement.classList.contains('ng-dirty')
      && this.nativeElement.classList.contains('ng-invalid');
  }

  get isValid() {
    return this.nativeElement.classList.contains('ng-dirty')
      && this.nativeElement.classList.contains('ng-valid');
  }
}
