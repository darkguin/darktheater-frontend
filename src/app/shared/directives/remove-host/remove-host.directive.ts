import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[removeHost]',
  standalone: true,
})
export class RemoveHostDirective implements OnInit {
  constructor(private el: ElementRef) {}

  /**
   * wait for the component to render completely
   */
  ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = nativeElement.parentElement!;

    if (parentElement) {
      while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
      }
      parentElement.removeChild(nativeElement);
    }
  }
}
