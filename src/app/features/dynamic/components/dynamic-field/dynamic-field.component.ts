import {Component, ComponentRef, forwardRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DynamicFieldComponent), multi: true }]
})
export class DynamicFieldComponent implements ControlValueAccessor {

  // @ts-ignore
  @Input() child: any;
  // @ts-ignore
  @Input() label: string;
  // @ts-ignore
  @Input() control: any;

  @Input() public value: any = '';


  //Get tag child component will be placed
  // @ts-ignore
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  // @ts-ignore
  private componentRef: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
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
  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

}
