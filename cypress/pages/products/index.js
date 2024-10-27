 
import { faker } from '@faker-js/faker' 

class Products {

    accessViewProduct() {
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product')
            .click()
    }

    searchProducts() {
        cy.get('input#search_product').type('Shirt')
        cy.get('button#submit_search').click()
    }

    newRegisterForBuyProducts() {

       const userName = faker.person.firstName()

        cy.get('[href$=login]').click()
        cy.get('[data-qa="signup-name"]').type(userName)
        cy.get('[data-qa=signup-email]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()
        cy.get('input[type=radio]').eq(0).check();
        cy.get('[data-qa="password"]').type('5r4s15sd5f1', { log: false });
        cy.get('[data-qa=days]').select(25)
        cy.get('[data-qa="months"]').select(5)
        cy.get('[data-qa="years"]').select('1989')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('[data-qa="company"]').type(faker.company.name())
        cy.get('[data-qa="address"]').type(faker.location.streetAddress())
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number())
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('contain', 'Account Created!')
        cy.url().should('includes', 'account_created')
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('contain', userName)
    }

    addToCartBtn() {

        cy.contains("Add to cart").click()
    }

    viewCartBtn() {

        cy.contains("View Cart").click()
    }

    proceedToCheckoutBtn() {

        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
    }

    orderCommentField() {

        cy.get('.form-control').type('A text about the order field for testing that')
    }

    placeOrderBtn() {

        cy.get('.btn-default.check_out').click()
    }


}
export default new Products()