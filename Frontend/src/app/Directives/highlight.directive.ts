import { Directive, OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.color='green'
  }
}
