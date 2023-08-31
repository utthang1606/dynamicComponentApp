import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormTemplateSelectorComponent } from './components/form-template-selector/form-template-selector.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public config: any = [
    {
      sectionName: 'test',
      title: 'Test Title',
      fields: [
        {
          type: FormInputComponent,
          name: 'firstInput',
          label: 'First Input',
        },
        {
          type: FormInputComponent,
          name: 'secondInput',
          label: 'Second Input',
        },
        {
          type: FormTemplateSelectorComponent,
          name: 'thirdInput',
          label: 'Third Input',
          options: {
            items: [
              {
                label: 'Item 1',
                value: 'item1',
              },
              {
                label: 'Item 2',
                value: 'item2',
              },
            ],
            config: [
              {
                sectionName: 'subSection',
                title: 'Test Title',
                fields: [
                  {
                    type: FormInputComponent,
                    name: 'firstInput',
                    label: 'First Input',
                    display: (data) => data == 'item1',
                  },
                  {
                    type: FormInputComponent,
                    name: 'secondInput',
                    label: 'Second Input',
                    display: (data) => data == 'item2',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];

  public formData: any = {
    test: {
      firstInput: 'TestData ',
      secondInput: 'Second Test Data',
    },
  };

  public getFormData() {}
}
