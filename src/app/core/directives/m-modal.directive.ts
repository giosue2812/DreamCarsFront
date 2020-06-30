import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';

declare const M:any;
@Directive({
  selector: '[mModal]'
})

export class MModalDirective implements AfterViewInit, OnDestroy{

  /**
   * @type {any}
   */
  private instance: any;

  constructor(private elRef: ElementRef<HTMLDivElement>) { }

  ngAfterViewInit(): void {
    this.instance = M.Modal.init(this.elRef.nativeElement);
  }
  ngOnDestroy(): void {
    this.instance.close();
  }
}
