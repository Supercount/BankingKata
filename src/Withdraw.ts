import {Transaction} from "./Transaction";

export class Withdraw implements Transaction{

    date: Date;
    value: number;

    constructor(value:number) {
        this.value = value;
        this.date = new Date();
    }

    getValue():number {
        return this.value;
    }

    printDate():string {
        return this.date.toString()
    }
}