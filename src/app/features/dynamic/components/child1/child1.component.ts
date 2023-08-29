import { Component } from '@angular/core';
import {ChildBaseComponent} from '../../../../shared/component/child-base.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component extends ChildBaseComponent {

  constructor(){
    //Run base constructor
    super();
    //Child component constructor logic...
    console.log('Child Component 1');
  }

}
