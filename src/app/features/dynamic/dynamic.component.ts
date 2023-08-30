import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  Injector,
  forwardRef,
  Renderer2,
} from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { ItemInputComponent } from '../../shared/component/item-input-component/item-input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-parent',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicComponent),
      multi: true,
    },
  ],
})
export class DynamicComponent {
  // @ts-ignore
  @Input() child: string;
  // @ts-ignore
  @Input() value: string;

  public testUser: FormControl;
  public testUserForm: FormGroup;

  //Get tag child component will be placed
  // @ts-ignore
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  // @ts-ignore
  private componentRef: ComponentRef<any>;

  //Child components
  private children = [
    {
      component: Child1Component,
      value: 'child 1',
      formControlName: '',
    },
    {
      component: IonInput,
      label: 'Tai Dep Trai',
      formControlName: 'ionInput',
      value: 'child 2',
    },
    {
      component: ItemInputComponent,
      label: 'Item Input Label',
      value: 'input component',
      formControlName: 'itemInput',
    },
  ];

  constructor(
    private viewContainerRef: ViewContainerRef,
    public fb: FormBuilder,
    public injector: Injector,
    private renderer: Renderer2
  ) {}

  //Pass through value to child component
  renderComponent() {
    if (this.componentRef) this.componentRef.instance.value = this.value;
  }

  public async ngOnInit(): Promise<void> {
    const formGroupFields = this.getFormControlsFields();
    this.testUser = new FormControl('mmm');
    formGroupFields['testUser'] = new FormControl('');
    this.testUserForm = new FormGroup(formGroupFields);
    this.trackFormChangeEvent();
  }

  getFormControlsFields() {
    const formGroupFields = {};
    this.children
      .map((item) => item.formControlName)
      .forEach((field) => {
        console.log('field: ', field);
        if (field) {
          formGroupFields[field] = new FormControl('aaaa');
        }
      });
    return formGroupFields;
  }

  //Compile child component
  ngAfterViewInit() {
    // @ts-ignore
    // let childComponent = this.children[this.child || 'child1'];
    //Resolve child component
    this.children.forEach((item) => {
      // const ngControl = this.injector.get(NgControl);
      // @ts-ignore
      this.componentRef = this.target.createComponent(item.component);
      if (this.componentRef) {
        // this.componentRef.instance.value = this.testUserForm.controls[item.formControlName].value;
        this.componentRef.instance.label = item.label;
        console.log(
          'form control: ',
          this.testUserForm.controls[item.formControlName]
        );
        // this.componentRef.instance.formControl = this.testUser;
        this.renderer.setProperty(
          this.componentRef.location.nativeElement,
          'formControlName',
          item.formControlName
        );
        this.componentRef.instance.control =
          this.testUserForm.controls[item.formControlName];
      }
    });
  }

  public trackFormChangeEvent(): void {
    this.testUserForm.valueChanges.subscribe(async (formData) => {
      console.log('formData data: ', formData);
    });
  }

  public getFormData(): void {
    console.error(this.testUserForm.value);
  }
  //Pass through value to child component when value changes
  ngOnChanges(changes: Object) {
    this.renderComponent();
  }
}
