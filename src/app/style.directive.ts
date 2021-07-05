import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input() dbStyle! : {border:string,borderRadius:string,color:string}
  constructor(private el:ElementRef, private r:Renderer2) {
  }
  @HostBinding('style.color') elColor:any = null
  @HostListener('click') onClick() {
    console.log(2)
  }
  @HostListener('mouseenter') onMouseenter() {
    this.elColor = this.dbStyle.color
  }
  @HostListener('mouseleave') onMouseleave() {
    this.elColor = null
   
  }
}
