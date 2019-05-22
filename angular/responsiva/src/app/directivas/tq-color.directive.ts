import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTqColor]'
})
export class TqColorDirective {

  constructor(el: ElementRef, renderer: Renderer2) { 
    el.nativeElement.classList.add("amarillo");
  }

}
