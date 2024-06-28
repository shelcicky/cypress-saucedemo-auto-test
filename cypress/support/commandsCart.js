/// <reference types="cypress" />

import locators from "./locators"

Cypress.Commands.add("proceedToCheckout", () => {
    cy.get(locators.cart.goCheckout).click()
})

Cypress.Commands.add("backToItemsList", () => {
    cy.get(locators.cart.goShopping).click()
})