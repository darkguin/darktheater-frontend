import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[lazy-image]',
  standalone: true,
})
export class LazyImageDirective implements AfterViewInit {
  @HostBinding('attr.src')
  srcAttribute = '';

  @Input() src = '';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.isSupport() ? this.loadLazy(this.src) : this.load(this.src);
  }

  private isSupport() {
    return window && 'IntersectionObserver' in window;
  }

  private loadLazy(source: string) {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting }: IntersectionObserverEntry) => {
        this.changeVisibility('hidden');

        if (isIntersecting) {
          this.changeVisibility('visible');
          this.load(source);
          observer.unobserve(this.elementRef.nativeElement);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }

  private load(source: string) {
    this.srcAttribute = source;
  }

  private changeVisibility(visibility: 'hidden' | 'visible') {
    (this.elementRef.nativeElement as HTMLElement).style.visibility = visibility;
  }
}
