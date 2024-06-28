/// <reference types="cypress" />

import locators from "./locators"

const confirmationPageTitle = "Checkout: Complete!"
const confirmationMessage = "Thank you for your order!"

Cypress.Commands.add("fillOutCheckoutInformation", (details) => {
    cy.get(locators.checkout.firstName).type(details.firstName)
    cy.get(locators.checkout.lastName).type(details.lastName)
    cy.get(locators.checkout.zipCode).type(details.zipCode)
})

Cypress.Commands.add("proceedToCheckoutOverview", () => {
    cy.get(locators.checkout.proceed).click()
})

Cypress.Commands.add("shouldConfirmItens", (items) => {
    items.forEach(item => {
        cy.get(locators.overview.genericItemOnList).contains(item).should('be.visible')
    });
})

Cypress.Commands.add("confirmOrder", () => {
    cy.get(locators.overview.finish).click()
})

Cypress.Commands.add("shouldOrderConfirmationBePresent", () => {
    cy.get(locators.orderConfirmation.title).contains(confirmationPageTitle).should('be.visible')
    cy.get(locators.orderConfirmation.header).contains(confirmationMessage).should('be.visible')
})