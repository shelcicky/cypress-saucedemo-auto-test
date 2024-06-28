/// <reference types="cypress" />

import "./commands"
import locators from "./locators"
import { urls } from "./constants"

Cypress.Commands.add("mustBeOnProductsPage", () => {
    cy.url().should("eq", urls.products)
    cy.get(locators.commons.cart).should('be.visible')
})

Cypress.Commands.add("addItem", (itemAlias) => {
    const item = `[data-test="add-to-cart-sauce-labs-${itemAlias}"]`
    cy.get(item).click()
})

Cypress.Commands.add("removeItem", (itemAlias) => {
    const item = `[data-test="remove-sauce-labs-${itemAlias}"]`
    cy.get(item).click()
})

