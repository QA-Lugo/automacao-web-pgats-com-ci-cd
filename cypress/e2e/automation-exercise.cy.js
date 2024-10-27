/// <reference types="cypress" /> 

import register from '../pages/register';
import login from '../pages/login';
import menu from '../pages/menu';
import utils from '../pages/utils/utils';
import contactUs from '../pages/contact-us';
import products from '../pages/products';
import subscription from '../pages/subscription';
import checkout from '../pages/checkout';

const gerarDados = utils.gerarDados();


describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });


  it('Test Case 1: Register User', () => {
    
    menu.goToLogIn();
    register.fillForm();
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

  });

  it('Test Case 2: Login User with correct email and password', () => {
  
    menu.goToLogIn();
    login.fillLogIn(Cypress.env('signUpEmail'), Cypress.env('signUpPassword'))
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

  });

  it('Test Case 3: Login User with incorrect email and password', () => {
  
    menu.goToLogIn();
    login.fillLogIn('lugo@mail.com', 'abcde')
    cy.get('p').should('contain', 'Your email or password is incorrect!')

  });

  it('Test Case 4: Logout User', () => {
  
    menu.goToLogIn();
    login.fillLogIn(Cypress.env('signUpEmail'), Cypress.env('signUpPassword'))
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

    menu.goToLogOut()

    cy.url().should('contain', 'login')
    cy.contains("Login to your account").should("be.visible");

  });

  it('Test Case 5: Register User with existing email', () => {
   
    menu.goToLogIn()
    login.fillLogInUserAlreadyExist()

    cy.get(`.signup-form form p`).should('be.visible').and('contain', 'Email Address already exist!')
  });

  it('Test Case 6: Contact Us Form', () => {
    
    menu.goToContactUs()

    cy.get(`.contact-form h2`).should('be.visible').and('have.text', 'Get In Touch')

    contactUs.fillContactUs()

    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    
    menu.goToProducts();

    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')

    products.accessViewProduct()

    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information p').should('be.visible').and('have.length', 4)
    cy.get('.product-information span span').should('be.visible')
  });

  it('Test Case 9: Search Product', () => {
   
    menu.goToProducts();

    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')

    products.searchProducts()

    cy.get('.title').should('be.visible').and('contain', 'Searched Products')
    cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)

  });

  it('Test Case 10: Verify Subscription in home page', () => {
   
    subscription.fillSubscription()

    cy.contains('You have been successfully subscribed!').should('be.visible')

  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    
    products.newRegisterForBuyProducts()
    products.addToCartBtn()
    products.viewCartBtn()
    products.proceedToCheckoutBtn()
    
    cy.get('.heading').first().should('have.text', 'Address Details')
    cy.get('.heading').last().should('have.text', 'Review Your Order')
    
    products.orderCommentField()
    products.placeOrderBtn()
    checkout.fillPaymentData()

    cy.get('[data-qa="order-placed"]').should('have.text', 'Order Placed!')

    menu.deleteAccountBtn()

    cy.get('b').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()

  });

});