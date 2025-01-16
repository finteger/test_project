//testing a whole module
const {calculateAge, getUserFullName, getUserInitials} = require('../functions/userUtils.js');

//Test Suite or Procedure
describe('User Utilities', () => {

    describe('getUserFullName', ()=> {
        it('should return the full name of the user with first and last name', () => {
            const user = { firstName: 'Bob', lastName: 'Smith' };
            expect(getUserFullName(user)).toBe('Bob Smith');
        });

        it('should throw an error if the user data is incomplete', () => {
            const user = { firstName: 'Bob' };
            expect(() => getUserFullName(user)).toThrow('Invalid user data');
        });
    });

    describe('calculateAge', ()=> {
        it('should calculate the correct age based on birth year & current year', () => {
            const birthYear = 2000;
            const currentYear = 2025;
            expect(calculateAge(birthYear, currentYear)).toBe(25);
        });
    });

});


