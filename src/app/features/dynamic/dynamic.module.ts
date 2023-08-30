import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { Child2Component } from './components/child2/child2.component';
import { Child1Component } from './components/child1/child1.component';
import { DynamicComponent } from './dynamic.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Child2Component, Child1Component, DynamicComponent],
  providers: [],
  imports: [
    IonicModule,
    CommonModule,
    DynamicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DynamicModule {}
