import {Account} from "../src/Account";

describe( 'unit test', () => {

    it('should return empty statement when there is no transactions', function () {
        let account = new Account();

        expect(account.printStatement()).toEqual("Date Amount Balance");
    });


});