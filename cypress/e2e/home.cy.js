//test suite
describe('Login Page', () =>{
  //pre-conditions. alternatively, we can use afterEach for post-conditions
    beforeEach(() =>{

      cy.visit('http://localhost:3000');
    });


    //Positive testing
    it('should login with valid credentials', () =>{
      //Arrange
      cy.get('#email').type('test@example.com');
      cy.get('#password').type('password123');

      //Act
      cy.get('#login-button').click();

      //Assert
      cy.on('window:alert', (txt) =>{
        expect(txt).to.contains('Login Successful!')
      });
    });

    //Negative testing
    it('should display error message if wrong credentials', () =>{
      //Arrange
      cy.get('#email').type('test@examples.com');
      cy.get('#password').type('password123');

      //Act
      cy.get('#login-button').click();

      //Assert
      cy.on('window:alert', (txt) =>{
        expect(txt).to.contains('Invalid credentials')
      });
  });

  //Brute force testing
  it('should for multiple failed login attempts', () =>{
 
    for(let i = 0; i < 5; i++){
      cy.get('#email').clear().type('wrongexample@gmail.com')
      cy.get('#password').clear().type('guessedpassword')
      cy.get('#login-button').click();
    }

    //Assert
    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Invalid credentials')
    });
  });


  //Test against multiple form submissions
  it('should prevent multiple form submissions' , () => {
    let alertText = '';

    //Capturing alert messages into a variable
    cy.on('window:alert', (txt) =>{
      alertText = txt;
    });

    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('#login-button').click().then(() =>{
      expect(alertText).to.contains('Login Successful!'); 
    });

    cy.get('#login-button').click().then(() =>{
      expect(alertText).to.contains('You have submitted too many times!'); 
    });

  });

   
    it('should test whether the browser auto-fills the password', () =>{
        cy.reload();
        cy.get('#email').should('not.have.value');
        cy.get('#password').should('not.have.value');
    });

});