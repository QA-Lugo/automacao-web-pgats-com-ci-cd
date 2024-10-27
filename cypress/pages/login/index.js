class Login {

    fillLogIn(user, password) {

        cy.get('[data-qa="login-email"]').type(user)
        cy.get('[data-qa="login-password"]').type(password, { log: false })

        cy.get('[data-qa="login-button"]').click()
    }

    fillLogInUserAlreadyExist() {

        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-1721346302730@mail.com`)
        cy.contains('button', 'Signup').click()
    }
    
}
export default new Login()