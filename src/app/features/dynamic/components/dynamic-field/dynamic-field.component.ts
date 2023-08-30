import {Component, ComponentRef, Input, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent {

  @Input() child: any;
  @Input() label: string;
  @Input() control: any;

  //Get tag child component will be placed
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

  private componentRef: ComponentRef<any>;

  constructor(
  ){}

  //Compile child component
  ngAfterViewInit():void {
    // @ts-ignore
    this.componentRef = this.target.createComponent(this.child);
    if (this.componentRef) {
      this.componentRef.instance.control = this.control;
      this.componentRef.instance.label = this.label;
    }
  }

}
