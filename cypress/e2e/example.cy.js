// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

// Before first test
beforeEach(() => {
  // For uncaught:exception won't fail tests
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  // Visit project env. Set it in cypress.confing.js with basic auth
  //cy.visit('/');
})

// Test case for Buttons
describe('Buttons', () => {
  it('commands test: clickButtonLabel, clickButtonName, clickButtonClass, clickButtonId', () => {
    // Uncomment one entry for demo
    // LABEL
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickButtonLabel('Xpath Button 2');
        cy.title().should('include', 'Button success'); */
    // NAME
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickButtonName('button1');
        cy.title().should('include', 'Button success'); */
    // CLASS
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickButtonClass('buttonClass');
        cy.title().should('include', 'Button success'); */
    // ID
    /*     cy.visit('https://demoqa.com/buttons');
        cy.clickButtonId('doubleClickBtn'); */
  })
})

// Test case for Inputs
describe('Inputs and Elements', () => {
  it('commands test: fillInputId, fillInputValue and clickElementAttr', () => {
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');

    /*     cy.fillInputId('et_pb_contact_name_0', 'Test name');
        cy.fillInputId('et_pb_contact_email_0', 'test@test.tst');
        cy.clickElementAttr('button', 'Email Me!'); */
  })
})

// Test case for Links
describe('Links', () => {
  it('commands test: clickLinkLabel, clickLinkId, clickLinkClass', () => {
    // Uncomment one entry for demo
    // LABEL
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickLinkLabel('Clickable Icon');
        cy.title().should('include', 'Link success'); */
    // ID
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickLinkId('simpleElementsLink');
        cy.title().should('include', 'Link success'); */
    // CLASS
    /*     cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.clickLinkClass('et_pb_button et_pb_button_0 et_pb_bg_layout_light');
        cy.title().should('include', 'Button success'); */
  })
})

// Test case for Checkboxes and Radiobuttons
describe('Checkboxes', () => {
  it('commands test: checkBoxValue', () => {
    cy.visit('http://autopract.com/selenium/form5/');
    cy.checkBoxValue('one');
    cy.checkBoxValue('two');
    cy.radioBtnValue('US');
    cy.radioBtnValue('mac');
  })
})