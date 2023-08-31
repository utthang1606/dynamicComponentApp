import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl: './form-input.component.html',
})
export class FormInputComponent {
  @Input() config;
  @Input() group: FormGroup;
}
