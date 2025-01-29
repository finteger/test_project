const mongoose = require('mongoose');
const { createUser, User } = require('../functions/userModel.js');




describe('User Model Tests', () => {
    //jest hook
   beforeEach(()=>{
        //Clear all mocks before each test case
        jest.clearAllMocks();
    });

    describe('createUser', ()=>{

        //AAA pattern
         it('should create the new user',  async () => {
            //Arrange - setup the variables
            const mockUser = { name: "Todd Nash",
                                email: "Todd.Nash@rdpolytech.ca",
                                password: "password",
                                age: 100 };

            //Action
            jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);    
            const result = await createUser('Todd Nash', 'Todd.Nash@rdpolytech.ca', 'password', 100);

            //Assert
            expect(result).toEqual(expect.objectContaining(mockUser));
            expect(User.prototype.save).toHaveBeenCalledTimes(1);
        });
    });
});


