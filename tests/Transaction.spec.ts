import {Account} from "../src/Account";
import {Deposit} from "../src/Deposit";

describe( 'unit test', () => {

    it('deposit should add value to current account', function () {
        let deposit = new Deposit(5)

        expect(deposit.getValue()).toEqual(5);
    });
});