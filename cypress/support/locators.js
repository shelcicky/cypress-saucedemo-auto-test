const locators = {
    login: {
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessageLabel: '[data-test="error"]',
    },
    commons: {
        cart: '[data-test="shopping-cart-link"]',
        openMenu: '#react-burger-menu-btn',
        logoutButton: '#logout_sidebar_link',
    },
    products: {
        addBackback: '#add-to-cart-sauce-labs-backpack',
        addFleeceJacket: '#add-to-cart-sauce-labs-fleece-jacket',
        addBikeLight: '#add-to-cart-sauce-labs-bike-light'

    },
    cart: {
        goCheckout: 'button[data-test="checkout"]',
        goShopping: '[data-test="continue-shopping"]',
    },
    checkout: {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        zipCode: '[data-test="postalCode"]',
        proceed: '[data-test="continue"]'
    },
    overview: {
        finish: '[data-test="finish"]',
        genericItemOnList: '[data-test="inventory-item-name"]'
    },
    orderConfirmation: {
        title: '[data-test="title"]',
        header: '[data-test="complete-header"]'
    }
}

export default locators