import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'ng-template.[templateType]'
})
export class TemplateTypeDirective {
    @Input()
    public templateType: string;

    constructor(public templateRef: TemplateRef<any>) {}
}
