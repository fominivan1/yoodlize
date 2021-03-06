module.exports = (pageObject, email, password, title, description, categoryOptions, street, city, state, zip, rate, image) => {
    pageObject
        .maximizeWindow()
        .click('@listItemOption')
        .waitForElementVisible('div[class="Login-container-2IZbL"]', 5000)
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password)
        .click('@logInButton')
        .waitForElementVisible('img[class="sc-hrWEMg buEeUU"]', 5000)
        .click('@listYourStuffOption')
        .waitForElementVisible('@getStarted', 5000)
        .click('@getStarted')
        .setValue('@titleInput', title)
        .setValue('@descriptionInput', description)
        .click('@pickCategory')
        .waitForElementVisible('option[value=""]', 5000)
        .click(categoryOptions)
        .click('@nextButton')
        .waitForElementVisible('@streetInput', 5000)
        .setValue('@streetInput', street)
        .setValue('@cityInput', city)
        .setValue('@stateInput', state)
        .setValue('@zipInput', zip)
        .click('@nextButton')
        .waitForElementVisible('@dailyRate', 5000)
        .setValue('@dailyRate', rate)
        .click('@nextButton')
        .waitForElementVisible('@rentalRules')
        .click('@rentalRules')
        .waitForElementVisible('@securityDeposit')
        .click('@securityDeposit')
        .waitForElementVisible('@addedRuleSecurity', 5000)
        .click('@nextButton')
        .pause(1000)
        .click('@nextButton')
        .waitForElementVisible('@nextButton', 5000)
        .setValue('input[type="file"]', require('path').resolve(`/Users/pashafomin/Desktop/DevMtn/yoodlize-pics/${image}`))
        .pause(5000)
        .getLocationInView('@nextButton')
        .waitForElementVisible('@nextButton', 15000)
        .click('@nextButton')
        .pause(5000)
        .click('@acceptLiability')
        .click('@agreeTermsConditions')
        .waitForElementVisible('@publishButton', 5000)
        .click('@publishButton')
        .waitForElementVisible('@nextButton', 5000)
        .pause(1000)
        .click('@nextButton')
        .waitForElementVisible('div[class="sc-bdVaJa iyjQMV"]', 5000)
        .expect.element('div[class="sc-bdVaJa iyjQMV"]').text.to.contain(title, description, rate, image)
    pageObject
        .click('@userAccount')
        .waitForElementVisible('@logoutButton', 5000)
        .click('@logoutButton')
        .pause(2000)
        .expect.element('div[class="sc-RefOD lJqoL"]').text.to.contain('Yoodlize is a peer to peer rental site')

}
