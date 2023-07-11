import('cypress-iframe');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* ***********************************************
  Template for a new command
 Cypress.Commands.add('name', (param1, param2) => {
     cy.log(`EXAPMLE: cy.name(param1, param2');`);
 })
 *********************************************** */

// ******************** MISC ********************
// Accept all cookies
Cypress.Commands.add('acceptCookies', (domain) => {
    cy.log(`All cookes was accepted`);
    Cypress.Cookies.debug(true);
    return cy.getAllCookies(domain);
})

// Visit URL with BASIC AUTHENTICATION, using 'username' and 'password'
Cypress.Commands.add('visitBasicAuth', (url, login, passw) => {
    cy.log(`EXAMPLE: cy.visitBasicAuth('www.url.com', 'username', 'password');`);
    cy.log('Add URL without https://');
    return cy.visit(url, {
        auth: {
            username: login,
            password: passw
        }
    });
})
// ***********************************************

// ******************* ELEMENT *******************
// Click on a visible ELEMENT with unique ATTRIBUTE
Cypress.Commands.add('clickElementAttr', (element, selector) => {
    cy.log(`EXAMPLE: cy.clickElementAttr('label', 'class="someClass");`);
    return cy
        .get(element)
        .contains(selector)
        .scrollIntoView()
        .should('be.visible')
        .click();
})
// ***********************************************

// ******************* BUTTONS *******************
// Click on a visible BUTTON with unique LABEL
Cypress.Commands.add('clickButtonLabel', (selector) => {
    cy.log(`EXAMPLE: cy.clickButtonLabel('Accept all cookies');`);
    return cy
        .get('button')
        .contains(selector)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible BUTTON with unique NAME
Cypress.Commands.add('clickButtonName', (selector) => {
    cy.log(`EXAMPLE: cy.clickButtonName('accept-all-cookies');`);
    return cy
        .get('button')
        .filter(`[name="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible BUTTON with unique ID
Cypress.Commands.add('clickButtonId', (selector) => {
    cy.log(`EXAMPLE: cy.clickButtonId('homepageBtn');`);
    return cy
        .get('button')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible BUTTON with unique VALUE
Cypress.Commands.add('clickButtonValue', (selector) => {
    cy.log(`EXAMPLE: cy.clickButtonValue('btn btn-primary btn-small');`);
    return cy
        .get('button')
        .filter(`[value="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible BUTTON with unique CLASS NAME
Cypress.Commands.add('clickButtonClass', (selector) => {
    cy.log(`EXAMPLE: cy.clickButtonClass('btn btn-primary btn-small');`);
    return cy
        .get('button')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})
// ***********************************************

// ******************** INPUTS *******************
// Click and fill a visible INPUT with unique NAME
Cypress.Commands.add('fillInputName', (selector, input) => {
    cy.log(`EXAMPLE: cy.fillInputName('name  grunion-field', 'some text');`);
    return cy
        .get('input')
        .filter(`[name="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .type(input);
})

// Click and fill a visible INPUT with unique ID
Cypress.Commands.add('fillInputId', (selector, input) => {
    cy.log(`EXAMPLE: cy.fillInputId('g1103-name', 'some text');`);
    return cy
        .get('input')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .type(input);
})

// Click and fill a visible INPUT with unique VALUE
Cypress.Commands.add('fillInputValue', (selector, input) => {
    cy.log(`EXAMPLE: cy.fillInputValue('email', 'some text');`);
    return cy
        .get('input')
        .filter(`["${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .type(input);
})

// Click and fill a visible INPUT with unique CLASS NAME
Cypress.Commands.add('fillInputClass', (selector, input) => {
    cy.log(`EXAMPLE: cy.fillInputClass('mr-form-name', 'some text');`);
    return cy
        .get('input')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .type(input);
})
// ***********************************************

// ******************** LINKS ********************
// Click on a visible LINK with unique LABEL
Cypress.Commands.add('clickLinkLabel', (selector) => {
    cy.log(`EXAMPLE: cy.clickLinkLabel('Clickable link');`);
    return cy
        .get('a')
        .contains(selector)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible LINK with unique ID
Cypress.Commands.add('clickLinkId', (selector) => {
    cy.log(`EXAMPLE: cy.clickLinkId('clickableLink');`);
    return cy
        .get('a')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})

// Click on a visible LINK with unique CLASS NAME
Cypress.Commands.add('clickLinkClass', (selector) => {
    cy.log(`EXAMPLE: cy.clickLinkClass('bc-github-link external external-icon');`);
    return cy
        .get('a')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .should('be.visible')
        .click();
})
// ***********************************************

// ****************** CHECKBOXES *****************
// Click on a visible CHECKBOX with unique VALUE
Cypress.Commands.add('checkBoxValue', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxValue('Checkbox to check');`);
    return cy
        .get('[type="checkbox"]')
        .filter(`[value="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible LINK with unique ID
Cypress.Commands.add('checkBoxId', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxId('checkbox-home');`);
    return cy
        .get('[type="checkbox"]')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible LINK with unique CLASS NAME
Cypress.Commands.add('checkBoxClassName', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxClassName('checkbox-home-class');`);
    return cy
        .get('[type="checkbox"]')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .check();
})
// ***********************************************

// ****************** CHECKBOXES *****************
// Click on a visible CHECKBOX with unique VALUE
Cypress.Commands.add('checkBoxValue', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxValue('Checkbox to check');`);
    return cy
        .get('input[type="checkbox"]')
        .filter(`[value="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible CHECKBOX with unique ID
Cypress.Commands.add('checkBoxId', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxId('checkbox-home');`);
    return cy
        .get('input[type="checkbox"]')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible CHECKBOX with unique CLASS NAME
Cypress.Commands.add('checkBoxClassName', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxClassName('checkbox-home-class');`);
    return cy
        .get('input[type="checkbox"]')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .check();
})
// ***********************************************

// ***************** RADIOBUTTONS ****************
// Click on a visible RADIOBUTTON with unique VALUE
Cypress.Commands.add('radioBtnValue', (selector) => {
    cy.log(`EXAMPLE: cy.radioBtnValue('Radio to check');`);
    return cy
        .get('input[type="radio"]')
        .filter(`[value="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible RADIOBUTTON with unique ID
Cypress.Commands.add('radioBtnId', (selector) => {
    cy.log(`EXAMPLE: cy.radioBtnId('radio-home');`);
    return cy
        .get('input[type="radio"]')
        .filter(`[id="${selector}"]`)
        .scrollIntoView()
        .check();
})

// Click on a visible RADIOBUTTON with unique CLASS NAME
Cypress.Commands.add('radioBtnClassName', (selector) => {
    cy.log(`EXAMPLE: cy.radioBtnClassName('radio-home-class');`);
    return cy
        .get('input[type="radio"]')
        .filter(`[class="${selector}"]`)
        .scrollIntoView()
        .check();
})
// ***********************************************