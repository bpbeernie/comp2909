import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'third-directive',
    template: `<h3>hello from the third directive. My last name is {{lastName}}</h3>`,
})
export class NewDirective3 {
    @Input()
    lastName!: string;
}
