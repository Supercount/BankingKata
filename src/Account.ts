export class Account {

    private value: number;

    constructor(number: number = 0) {
        this.value=number;
    }

    getValue():number {
        return this.value;
    }

    deposit(value: number):void {
        if(value <= 0) {
            throw new RangeError("Deposit must be greater than zero.")
        }
        this.value += value;
    }

    withdraw(value: number):void{
        if(value <= 0) {
            throw new RangeError("Withdraw must be greater than zero.")
        }
        this.value -= value;
    }

    printStatement():string {
        return "Date Amount Balance";
    }
}