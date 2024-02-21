import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(public elem: ElementRef,public  renderer: Renderer2) {
          this.renderer.setStyle(this.elem.nativeElement,'background-color','yellow');
         


   }

   @HostListener('click')
   onclick(){
    this.renderer.setStyle(this.elem.nativeElement,'background-color','cyan');
    this.renderer.setProperty(this.elem.nativeElement,'innerHTML','I am Himank');
   }
      
}
