import {
  ComponentRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit, OnDestroy {
  @Input() config;
  @Input() group: FormGroup;

  private component: ComponentRef<any>;
  constructor(private container: ViewContainerRef) {}

  ngOnInit() {
    this.component = this.container.createComponent(this.config.type);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.label = this.config.label;
  }

  ngOnDestroy(): void {
    if (this.component) {
      this.component.destroy();
    }
  }
}
