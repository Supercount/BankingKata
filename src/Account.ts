import {Deposit} from "./Deposit";

export class Account {

    constructor(number: number) {
        this.value=number;
    }

    private value: number;


    getValue():number {
        return this.value;
    }

    deposit(value: number):void {
        if(value <= 0) {
            throw new RangeError("Deposit must be greater than zero.")
        }
        this.value +=value;
    }
}