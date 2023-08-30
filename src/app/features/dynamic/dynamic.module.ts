import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicFieldComponent} from "./components/dynamic-field/dynamic-field.component";
import {Child1Component} from "./components/child1/child1.component";
import {DynamicComponent} from "./dynamic.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
      Child1Component,
      DynamicComponent,
      DynamicFieldComponent
    ],
    providers: [],
    imports: [IonicModule, CommonModule, DynamicRoutingModule, SharedModule]
})
export class DynamicModule {}
