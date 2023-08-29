import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ItemInputComponent} from './component/item-input-component/item-input.component';

@NgModule({
    declarations: [
        // Components
      ItemInputComponent,
    ],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
      FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        // Reused Modules
      FormsModule,
        ReactiveFormsModule,
        CommonModule,
        IonicModule,
        RouterModule,

        // Components
      ItemInputComponent,
    ]
})
export class SharedModule {}
