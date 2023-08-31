import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any;
  @Input() public formData: any;
  public formGroup: any;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.buildFormGroup();
    this.onFormChange();
  }

  public onFormChange(): void {
    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  public buildFormGroup() {
    this.formGroup = this.fb.group({});
    this.config.forEach((section) => {
      const nestedFormGroup = this.fb.group({});
      section.fields.forEach((field) => {
        nestedFormGroup.addControl(field.name, this.fb.control(''));
      });
      this.formGroup.addControl(section.sectionName, nestedFormGroup);
    });
    this.formGroup.patchValue(this.formData);
  }
}
