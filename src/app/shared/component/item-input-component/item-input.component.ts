import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
    selector: 'app-item-input-component',
    templateUrl: './item-input.component.html',
    styleUrls: ['./item-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ItemInputComponent), multi: true }]
})
export class ItemInputComponent implements ControlValueAccessor {
  // @ts-ignore
  @Input() control: FormControl;

  // @ts-ignore
  @Input() public label: string;
    @Input() public displayStackedLabel = false;
  // @ts-ignore
    @Input() public validationPattern: RegExp;
  // @ts-ignore
    @Input() public placeholder: string;
    @Input() public customStyle: any;
    @Input() public value: any = '';
    @Input() public inputMode: any = '';
  // @ts-ignore
    @Input() public maxLength: number;
    @Input() public enableClearInput = false;

    @Output()
    public onchange: EventEmitter<any> = new EventEmitter();
    @Output()
    public onfocus: EventEmitter<any> = new EventEmitter();
    @Output()
    public onblur: EventEmitter<any> = new EventEmitter();

    @ViewChild('ionInputEl', { static: true }) public ionInputEl!: IonInput;

    public previousValue: any = '';
    public disabled = false;
    public touched = false;

    constructor(private cdr: ChangeDetectorRef) {}

    public writeValue(value: any): void {
        this.previousValue = value;
        if (value !== undefined) {
            this.value = value;
        }
        this.cdr.detectChanges();
    }

    public registerOnChange(fn: any): void {
        this.onChanged = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.cdr.detectChanges();
    }

    public onInputChange(event: any): void {
        if (!event?.target?.value) {
            this.value = this.ionInputEl.value = this.previousValue = '';
        } else {
            const isValid = this.validationPattern ? this.validationPattern.test(event?.target?.value) : true;
            if (isValid) {
                this.value = this.previousValue = event?.target?.value;
            } else {
                this.value = this.ionInputEl.value = this.previousValue;
            }
        }

        this.markAsTouched();
        this.onChanged(this.value);
        this.onchange.emit(event);
    }

  // @ts-ignore
    public onInputBlur(event): void {
        this.onTouched(this.value);
        this.onblur.emit(event);
    }

  // @ts-ignore
    public onInputFocus(event): void {
        this.onfocus.emit(event);
    }

  // @ts-ignore
    public onTouched(_unitValue): void {}

  // @ts-ignore
    public onChanged(_unitValue): void {}

    public markAsTouched(): void {
        if (!this.touched) {
            this.onTouched(this.value);
            this.touched = true;
        }
    }

    public clearInput(): void {
        this.ionInputEl.value = null;
        this.onInputChange(null);
    }
}
