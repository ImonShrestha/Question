import register_name from "../fixtures/register_name.json"

describe('NoteApp', () => {
    it('Register, Check functionality of Register button with invalid inputs', () => {
    register_name.forEach((user) =>{
    cy.visit('https://practice.expandtesting.com/notes/app/register')
    cy.get('[data-testid="register-email"]').type(user.emailaddress,{delay:50});
    cy.get('[data-testid="register-password"]').type(user.password,{delay:50});
    cy.get('[data-testid="register-name"]').type(user.name,{delay:50});
    cy.get('[data-testid="register-confirm-password"]').type(user.confirm_password,{delay:50});
    cy.get('[data-testid="register-submit"]').click();
    cy.get(':nth-child(1) > :nth-child(1) > .invalid-feedback').should('contain', 'Email address is invalid');  
    cy.wait (5000)  
    })
    })

    it('Register, Check functionality of Register button with valid inputs', () => {
    register_name.forEach((user) =>{
    cy.visit('https://practice.expandtesting.com/notes/app/register')
    cy.get('[data-testid="register-email"]').type(user.emailaddress1,{delay:50});
    cy.get('[data-testid="register-password"]').type(user.password1,{delay:50});
    cy.get('[data-testid="register-name"]').type(user.name1,{delay:50});
    cy.get('[data-testid="register-confirm-password"]').type(user.confirm_password1,{delay:50});
    cy.get('[data-testid="register-submit"]').click();
    cy.get('[data-testid="alert-message"]').should('contain', 'An account already exists with the same email address');
    // cy.get('[data-testid="login-view"]').should('contain', 'Click here to Log In');
    cy.wait (5000) 
    })
    })

    it('Verify if Google account text is clickable and functions', () => {
        cy.visit('https://practice.expandtesting.com/notes/app/register')
        cy.get('[data-testid="login-with-google"]').click();
        cy.wait (5000) 
    });

    it('Check if user can reset password using forgot password', () => {
        cy.visit('https://practice.expandtesting.com/notes/app/login')
        cy.get('#forgotPasswordLink').click();
        cy.get('h1').should('contain', 'Reset your password');
        cy.wait (5000) 
    });
})