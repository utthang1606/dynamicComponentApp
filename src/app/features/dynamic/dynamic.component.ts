import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentRef, Injector, forwardRef
} from '@angular/core';
import {Child1Component} from "./components/child1/child1.component";
import {ItemInputComponent} from '../../shared/component/item-input-component/item-input.component';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IonInput} from "@ionic/angular";


@Component({
  selector: 'app-parent',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {
  @Input() child: any;
  @Input() value: string;

  public testUser: FormControl;
  public testUserForm: FormGroup;

  //Get tag child component will be placed
  // @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  // private componentRef: ComponentRef<any>;


  //Child components
  public children = [
    {
      component: Child1Component,
      value: 'child 1',
      formControlName: 'test'
    },
    {
      component: IonInput,
      label: 'Ion Input Label',
      formControlName: 'ionInput',
      value: 'child 2'
    },
    {
      component: ItemInputComponent,
      label: 'Item Input Label',
      value: 'input component',
      formControlName: 'itemInput'
    }
  ];

  constructor(
    public fb: FormBuilder,
    public injector: Injector
  ) {
  }

  public async ngOnInit(): Promise<void> {

    const formGroupFields = this.getFormControlsFields();
    this.testUser = new FormControl('mmm');
    formGroupFields['testUser'] = new FormControl('mmm');
    this.testUserForm = new FormGroup(formGroupFields);
    this.trackFormChangeEvent();
  }

  getFormControlsFields() {
    const formGroupFields = {};
    this.children.map(item => item.formControlName).forEach((field) => {
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
    // this.children.forEach((item) => {
    //
    //   // @ts-ignore
    //   console.log('component: ', item.component);
    //   this.componentRef = this.target.createComponent(item.component);
    //   if (this.componentRef) {
    //     // this.componentRef.instance.value = this.testUserForm.controls[item.formControlName].value;
    //     this.componentRef.instance.label = item.label;
    //     console.log('form control: ', this.testUserForm.controls[item.formControlName]);
    //     console.log('this.componentRef.instance: ', this.componentRef.instance);
    //     this.componentRef.instance.control = this.testUserForm.controls[item.formControlName];
    //     // this.componentRef.instance.formControl = this.testUserForm.controls[item.formControlName];
    //     // this.componentRef.instance['formControlName']= item.formControlName;
    //     // this.componentRef.instance['formControlName']= this.testUserForm.controls[item.formControlName];//item.formControlName;
    //
    //   }
    // });
  }

  public trackFormChangeEvent(): void {
    this.testUserForm.valueChanges.subscribe(async (formData) => {
      console.log('formData data: ', formData)
    });
  }

}
