import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { TemplateTypeDirective } from './template-type.directive';
import { deepClone } from 'src/app/shared/utils';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-template-selector',
  templateUrl: './form-template-selector.component.html',
  styleUrls: ['./form-template-selector.component.scss'],
})
export class FormTemplateSelectorComponent implements AfterViewInit {
  @Input() config;
  @Input() group: FormGroup;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onSelectChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(TemplateTypeDirective)
  public templateList: QueryList<TemplateTypeDirective>;
  public selectedValue: any;
  public displayRef: TemplateRef<any>;
  public disabled = false;
  public touched = false;

  public items: any[];
  public level: string = '0';
  public templateConfig: any;
  constructor(private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.items = this.config.options.items;
    // this.valueSubject.subscribe((templateName) => {
    //   const template = this.templateList.find(
    //     (data) => data.templateType === templateName
    //   );
    //   this.displayRef = template?.templateRef;
    //   this.cdr.detectChanges();
  }

  public updateValue(value: string): void {
    this.selectedValue = this.findTemplateDataByValue(value);
    const subConfiguration = deepClone(this.config?.options?.config);
    if (!subConfiguration) return;
    subConfiguration[0].title = this.selectedValue?.label;
    subConfiguration[0].fields = subConfiguration[0].fields.filter((data) =>
      data.display(value)
    );
    this.templateConfig = subConfiguration;
  }

  public removeSection(): void {
    this.updateValue('');
  }

  public findTemplateDataByValue(value: string): any {
    for (let i = 0, n = this.items.length; i < n; i++) {
      if (this.items[i].value === value) {
        return this.items[i];
      }
    }
    return undefined;
  }
}
