/// <reference types="cypress" />

import { urls } from "../support/constants"
import locators from "./locators"

Cypress.Commands.add("mustBeOnLoginPage", () => {
    cy.url().should("eq", urls.sauceLogin)
    cy.get(locators.login.loginButton).should('be.visible')
})

Cypress.Commands.add("performLogin", (username, password) => {
    cy.get(locators.login.usernameField).type(username)
    cy.get(locators.login.passwordField).type(password)
    cy.get(locators.login.loginButton).click()
})

Cypress.Commands.add("validateLoginMessage", (message) => {
    cy.get(locators.login.errorMessageLabel).should('have.text', message)
})