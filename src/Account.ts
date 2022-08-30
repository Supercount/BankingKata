export class Account {

    constructor(number: number) {
        this.value=number;
    }

    private value: number;


    getValue():number {
        return this.value;
    }

    deposit(value: number):void {
        this.value +=value;
    }
}