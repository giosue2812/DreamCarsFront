import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';


declare const M:any;
@Directive({
  selector: '[mCollapsible]'
})
/**
 * Directive to use Collapsible's Materialize
 *
 */
export class MCollapsibleDirective implements AfterViewInit, OnDestroy {

  /**
   * @type {any}
   */
  private instance: any;

  /**
   * @param elRef ElementRef<HTMLDivElement>
   */
  constructor(private elRef: ElementRef<HTMLDivElement>) { }

  /**
   * @description Init Directive collapsible on the div element
   */
  ngAfterViewInit(): void {
    this.instance = M.Collapsible.init(this.elRef.nativeElement);
  }

  /**
   * @description Close the directive
   */
  ngOnDestroy(): void {
    this.instance.close();
  }


}
