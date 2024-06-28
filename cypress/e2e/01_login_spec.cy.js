/// <reference types="cypress" />

import { urls } from "../support/constants"
import "../support/commandsLogin"
import "../support/commandsProducts"

const errorLoginMessage = "Epic sadface: Sorry, this user has been locked out."

describe('Should validate logins and logount on SauceDemo website', () => {
    beforeEach(function() {
        cy.fixture('credentials').as('credentials')
        cy.visit(urls.home)
    })

    it('Should not perform login successfully', function() {
        cy.performLogin(this.credentials.blockedUser.username, this.credentials.blockedUser.password)
        cy.validateLoginMessage(errorLoginMessage)
    })

    it('Should perform logout successfully', function() {
        cy.performLogin(this.credentials.buggedUser.username, this.credentials.buggedUser.password)
        cy.mustBeOnProductsPage()
        cy.performLogout()
        cy.mustBeOnLoginPage()
    })
})
