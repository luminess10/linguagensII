import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombra]',
})
export class SombraDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '10px 10px');
  }
}
