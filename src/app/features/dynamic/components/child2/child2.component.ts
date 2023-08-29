import { Component } from '@angular/core';
import {ChildBaseComponent} from '../../../../shared/component/child-base.component';

@Component({
  selector: 'app-child2',
  template: 'This is Child Component 2'
})
export class Child2Component extends ChildBaseComponent {

  constructor(){
    //Run base constructor
    super();
    //Child component constructor logic...
    console.log('Child Component 1');
  }

}
