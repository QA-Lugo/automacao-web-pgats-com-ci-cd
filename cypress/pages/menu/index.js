class Menu {

    goToProducts() {

        cy.contains(`Products`).click()

    }

    goToLogIn() {
        
        cy.get('a[href$=login]').click()
    }

    goToLogOut() {

        cy.contains('Logout').click()
    }

    goToContactUs() {
        
        cy.contains(`Contact us`).click()
    }


    deleteAccountBtn() {

        cy.get('[data-qa="order-placed"]').should('be.visible')
        cy.get('[href *="delete"]').click()
    }


}
export default new Menu()