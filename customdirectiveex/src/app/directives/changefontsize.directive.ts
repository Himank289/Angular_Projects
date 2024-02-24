import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

/*
Note:see that as we use @HostBinding annotation we do not need to inject
element-ref and renderer to change element UI dom.
*/
@Directive({
  selector: '[appChangefontsize]',
  standalone:true
})
export class ChangefontsizeDirective {

  @HostBinding('style.fontSize') fontSize!:string;

  @Input('appChangefontsize') startingFontSize!:string;
  @Input('clkfont') onclickFontSize!:string;

  // constructor() { }

  // constructor(public elem: ElementRef,public  renderer: Renderer2){

  // }


  ngOnInit()
  {
    this.fontSize = '300%';
    console.log('starting font-size:'+this.startingFontSize);
    this.fontSize = this.startingFontSize;
    // this.renderer.setStyle(this.elem.nativeElement,'fontSize','200%');

  }

  @HostListener('click')
  onclick()
  {
    this.fontSize = '100%';
    this.fontSize = this.onclickFontSize;
    // this.renderer.setStyle(this.elem.nativeElement,'fontSize','100%');
  }
  



}
