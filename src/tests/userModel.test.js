const mongoose = require('mongoose');
const { createUser } = require('../functions/userModel.js');


//Mocking mongoose model
jest.mock('mongoose');
const MockedUser = mongoose.model('User');

describe('User Model Tests', () =>{
    //jest hook
    afterEach(()=>{
        //Clear all mocks after each test case
        jest.clearAllMocks();
    });

    describe('createUser', ()=>{
        //test dtypes, unique email, age boundary, validation/verification, 

    });
});


