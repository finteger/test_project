//testing a whole module
const {calculateAge, getUserFullName, getUserInitials} = require('../functions/userUtils.js');

//Test Suite or Procedure
describe('User Utilities', () => {

    describe('getUserFullName', ()=> {
        it('should return one name if the user has no last name', () => {
            const user = { firstName: 'Bob', lastName: '' };
            expect(getUserFullName(user)).toBe('Bob');
        });
    });

    describe('calculateAge', ()=> {
        it('should calculate the correct age based on birth year & current year', () => {
            const birthYear = 2000;
            const currentYear = 2025;
            expect(calculateAge(birthYear, currentYear)).toBe(25);
        });

        it('should error if one of the inputs is a float & not a integer', () => {
            const birthYear = 2.22;
            const currentYear = 2025;
            expect(() => calculateAge(birthYear, currentYear)).toThrow('Invalid year');
        });
    });

});