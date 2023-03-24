import { Directive , ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeadingColor]',
  standalone: true
})
export class HeadingColorDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.color='grey'
  }
  
  @HostListener('mouseenter')mouseenter(){ 
    this.elementRef.nativeElement.style.color='red'
  }

  @HostListener('mouseleave')mouseleave(){ 
    this.elementRef.nativeElement.style.color='green'
  }

}
