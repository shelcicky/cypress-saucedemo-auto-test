/// <reference types="cypress" />

import "../support/locators"
import "../support/commandsLogin"
import "../support/commandsProducts"
import "../support/commandsCart"
import "../support/commandsCheckout"

import { urls, descItems, aliasItems } from "../support/constants"

describe('Should validate checkout on SauceDemo website', () => {
    beforeEach(function() {
        cy.fixture('checkoutDetail').as('checkoutInformation')
        cy.fixture('credentials').then(credentials => {
            cy.visit(urls.home)
            cy.performLogin(credentials.standardUser.username, credentials.standardUser.password)
        })
    })

    it('Should add two items on cart and finish order', function() {
        const expectedItems = [descItems.backpack, descItems.bikeLight]
        cy.addItem(aliasItems.backpack)
        cy.addItem(aliasItems.bikeLight)
        cy.accessCartDetails()
        cy.proceedToCheckout()
        cy.fillOutCheckoutInformation(this.checkoutInformation)
        cy.proceedToCheckoutOverview()
        cy.shouldConfirmItens(expectedItems)
        cy.confirmOrder()
        cy.shouldOrderConfirmationBePresent()
    })

    it('Should finish order after remove item from cart page', function() {
        const expectedItems = [descItems.backpack]
        cy.addItem(aliasItems.backpack)
        cy.addItem(aliasItems.bikeLight)
        cy.accessCartDetails()
        cy.removeItem(aliasItems.bikeLight)
        cy.proceedToCheckout()
        cy.fillOutCheckoutInformation(this.checkoutInformation)
        cy.proceedToCheckoutOverview()
        cy.shouldConfirmItens(expectedItems)
        cy.confirmOrder()
        cy.shouldOrderConfirmationBePresent()
    })

    it('Should finish order after access cart page and back to add one more item', function() {
        const expectedItems = [descItems.backpack, descItems.bikeLight, descItems.tShirt]
        cy.addItem(aliasItems.backpack)
        cy.addItem(aliasItems.bikeLight)
        cy.accessCartDetails()
        cy.backToItemsList()
        cy.addItem(aliasItems.tShirt)
        cy.accessCartDetails()
        cy.proceedToCheckout()
        cy.fillOutCheckoutInformation(this.checkoutInformation)
        cy.proceedToCheckoutOverview()
        cy.shouldConfirmItens(expectedItems)
        cy.confirmOrder()
        cy.shouldOrderConfirmationBePresent()
    })
})
