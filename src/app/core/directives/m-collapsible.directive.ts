import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';


declare const M:any;
@Directive({
  selector: '[mCollapsible]'
})
export class MCollapsibleDirective implements AfterViewInit, OnDestroy {

  private instance: any;

  constructor(private elRef: ElementRef<HTMLDivElement>) { }

  ngAfterViewInit(): void {
    this.instance = M.Collapsible.init(this.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.instance.close();
  }


}
