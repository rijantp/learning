import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOpp]'
})
export class OppDirective {
  // temp:TemplateRef<any>=Inject(TemplateRef);
  // view:ViewContainerRef=Inject(ViewContainerRef);
  @Input() set appOpp(hide:boolean){
    console.log(hide)
    hide?this.view.createEmbeddedView(this.temp):this.view.clear()
  }

  public constructor(private temp:TemplateRef<any>,private view:ViewContainerRef){}
}
