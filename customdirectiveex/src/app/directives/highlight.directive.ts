import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit,OnChanges {
  @Input('initcolor') color1:string;   //alias naming
  @Input() color2:string;

  constructor(public elem: ElementRef,public  renderer: Renderer2) {
      this.color1='yellow';
      this.color2='cyan';
          // this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color1);
          // this.renderer.setProperty(this.elem.nativeElement,'innerHTML','good day');
        console.log('directive constructor called'+this.color1);
         


   }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('highlightdirective on changes lifecyce method called'+this.color1);//view will get render here //input will get assigned here after rendering
  }

   ngOnInit(){
          console.log('ngoinit highlight called'+this.color1);
          this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color1);
          this.renderer.setProperty(this.elem.nativeElement,'innerHTML','good day');
   }

   @HostListener('click')
   onclick(){
    console.log('inside click function');
    this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color2);
    this.renderer.setProperty(this.elem.nativeElement,'innerHTML','I am Himank');
   }
      
}
