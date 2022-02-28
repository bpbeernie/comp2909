import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumberPipe' })

export class PhoneNumberPipe implements PipeTransform {
    transform(inputNumber: string): string {
        return "(" + inputNumber.substring(0, 3) + ") " + inputNumber.substring(3, 6) + "-" + inputNumber.substring(6);
    }
}
