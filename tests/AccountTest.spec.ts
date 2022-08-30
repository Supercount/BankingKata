import {Account} from "../src/Account";

describe( 'unit test', () => {

    it('deposit should add value to current account', function () {
        let account = new Account(0);

        let value = 5;
        account.deposit(value)
        const actual = account.getValue();

        expect(actual).toEqual(5);
    });

    it('deposit should not allow negative value.', function () {
        let account = new Account(0);

        let value = -5;
        expect(() => account.deposit(value)).toThrow("Deposit must be greater than zero.");
    });
});