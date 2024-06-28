/// <reference types="cypress" />

import locators from "./locators"

Cypress.Commands.add("accessCartDetails", () => {
    cy.get(locators.commons.cart).click()
})

Cypress.Commands.add("performLogout", () => {
    cy.get(locators.commons.openMenu).click()
    cy.get(locators.commons.logoutButton).click()
})