import { Component } from '@angular/core';
@Component({
    template: `This is page A.<br>This content was set in page-b: {{someItem}}
    <br>This content was also set in page-b: {{someItem2}}`
})
export class PageAComponent {
    someItem: string;
    someItem2: string;

    constructor() {
        this.someItem = sessionStorage.getItem("autosave") || "";
        this.someItem2 = sessionStorage.getItem("autosave2") || "";
    }
}
