class Subscription {

    fillSubscription() {

        cy.get('input#susbscribe_email').scrollIntoView().type('tester-qa@mail.com')
        cy.get('button#subscribe').click()

    }

}
export default new Subscription()