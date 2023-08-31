import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { TestPageComponent } from './test-page.component';
import { TestPageRoutingModule } from './test-page-routing.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-fields.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormTemplateSelectorComponent } from './components/form-template-selector/form-template-selector.component';
import { TemplateTypeDirective } from './components/form-template-selector/template-type.directive';

@NgModule({
  declarations: [
    DynamicFormComponent,
    TestPageComponent,
    DynamicFieldDirective,
    FormInputComponent,
    TemplateTypeDirective,
    FormTemplateSelectorComponent,
  ],
  providers: [],
  imports: [
    IonicModule,
    CommonModule,
    TestPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestPageModule {}
