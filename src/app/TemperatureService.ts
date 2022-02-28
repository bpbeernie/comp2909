
// This is the service.
export class TemperatureService {

    constructor() {
    }
    convertCToF(tempInC: number) : number {
        return (9/5 * tempInC) + 32;
    }
}
