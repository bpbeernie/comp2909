import { Component } from '@angular/core';
@Component({
    template: `This is page b. 
    <input type="input"  (ngModelChange)="mychange($event)" [ngModel]="mymodel">&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="input"  (ngModelChange)="mychange2($event)" [ngModel]="mymodel">
    `
})
export class PageBComponent {
    mymodel!:string;
    constructor() {

    }
    mychange(val:string) {
        sessionStorage.setItem("autosave", val);
        console.log(val); // updated value
    }

    mychange2(val:string) {
        sessionStorage.setItem("autosave2", val);
        console.log(val); // updated value
    }
}