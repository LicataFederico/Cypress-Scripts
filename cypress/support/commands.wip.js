// ***********************************************
// PLAN TO ADD
// ***********************************************
// [ ] Adding Flow: Generating unique E-mail from cypress.config.js
// [ ] Command: Dropdowns
// [ ] Command: Elements with ARIA labels
// [ ] Command: iFrames
// [ ] Command: SPAN
// [ ] Command: DIV
// [ ] Command: P
// [ ] Command: Images
// [ ] Command: Icons
// [ ] Adding Flow: Creating User
// [ ] Adding Flow: Registration Forms
// [ ] Adding Flow: Checkout Froms
// [ ] Adding Flow: Billing Forms
// [ ] Adding Flow: Search
// [ ] Using Fixtures
// [ ] Add JEST for APi
// ***********************************************

// ****************** CHECKBOXES WITH FORCE*****************
// Click on a visible CHECKBOX with unique LABEL
Cypress.Commands.add('checkBoxValueForce', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxValueForce('Checkbox to check');`);
    return cy
        .get('[type="checkbox"]').then((checkbox) => {
            if (checkbox.is(':visible')) {
                cy
                    .get(selector)
                    .check();
            } else {
                cy
                    .get(selector)
                    .check({ force: true })
                    .log('Element is not visible: FORCED CHECK');
            }
        })
})

// Click on a visible LINK with unique ID
Cypress.Commands.add('checkBoxIdForce', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxIdForce('checkbox-home');`);
    return cy
        .get('[type="checkbox"]').then((checkbox) => {
            if (checkbox.is(':visible')) {
                cy
                    .get(checkbox)
                    .children(`[id="${selector}"]`)
                    .scrollIntoView()
                    .check();
            } else {
                cy
                    .get(`[id="${selector}"]`)
                    .check({ force: true })
                    .log('Element is not visible: FORCED CHECK');
            }
        })
})

// Click on a visible LINK with unique CLASS NAME
Cypress.Commands.add('checkBoxIdForce', (selector) => {
    cy.log(`EXAMPLE: cy.checkBoxIdForce('checkbox-home-class');`);
    return cy
        .get('[type="checkbox"]').then((checkbox) => {
            if (checkbox.is(':visible')) {
                cy
                    .get(`[class="${selector}"]`)
                    .check();
            } else {
                cy
                    .get(`[class="${selector}"]`)
                    .check({ force: true })
                    .log('Element is not visible: FORCED CHECK');
            }
        })
})
// ***********************************************