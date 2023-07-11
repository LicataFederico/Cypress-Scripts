# **Automation Shelf Cypress**
The automation was build on a Windows machine.
The test scripts have been designed to be run on *Chrome* and *Firefox*.

## **Tools Used**
The automation scripts have been created using **[Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)** functionality of **[Cypress Framework](https://www.cypress.io/)**.

## **Install and Setup**
1. Install **[Node.js](https://nodejs.org/en/download)**.
2. Check version of **npm** and **Node.js**: 
```
node -v
npm -v
```
3. Install **[Cypress Framework](https://www.cypress.io/)**
```
npm install cypress --save-dev
```
4. Run **[Cypress](https://www.cypress.io/)**

```
$(npm bin)/cypress run
```
..or..
```
./node_modules/.bin/cypress run
```
..or.. (requires npm@5.2.0 or greater)
```
npx cypress run
```
..or..
```
yarn cypress run
```
- The *commands.js* file located in *cypress/support* folder has various commands to invoke elements by their locators with the ID or NAME or other attributes as variables.
- The default config file is *cypress.config.js* it has the parameters that will be used to run test or can be used in the comaands.

## **Scenarios examples**
- In the *cypress/e2e* folder file *exmaple.cy.js* can be used as an example with multiple tests covering the happy path.

## **How to create and run the scripts** 
- Create new folders and files in *cypress/e2e* folder.
- Run trough the **Cypress runner** as an **e2e tests** with a browser of your liking.

---
## **List of commands**

## **Misc**
### 1. Visit URL with BASIC AUTHENTICATION, using 'username' and 'password'
>`Example: cy.visitBasicAuth('www.url.com', 'username', 'password');`

### 2. Click on a visible ELEMENT with unique ATTRIBUTE
>`Example: cy.clickElementAttr('label', 'class="someClass");`


## **Button**
### 1. Click on a visible BUTTON with unique LABEL
>`Example: cy.clickButtonName('Accept all cookies');`

### 2. Click on a visible BUTTON with unique NAME
>`Example: cy.clickButtonName('accept-all-cookies');`

### 3. Click on a visible BUTTON with unique ID
>`Example: cy.clickButtonId('homepageBtn');`

### 4. Click on a visible BUTTON with unique VALUE
>`Example: cy.clickButtonValue('btn btn-primary btn-small');`

### 5. Click on a visible BUTTON with unique CLASS NAME
>`Example: cy.clickButtonClass('btn btn-primary btn-small');`


## **Input**
### 1. Click and fill a visible INPUT with unique NAME
>`Example: cy.fillInputName('name  grunion-field', 'some text');`

### 2. Click and fill a visible INPUT with unique ID
>`Example: cy.fillInputId('g1103-name', 'some text');`

### 3. Click and fill a visible INPUT with unique VALUE
>`Example: cy.fillInputValue('674', 'some text');`

### 4. Click and fill a visible INPUT with unique CLASS NAME
>`Example: cy.fillInputValue('input-name', 'some text');`

## **Link**
### 1. Click on a visible LINK with unique LABEL
>`Example: cy.clickLinkName('Clickable link');`

### 2. Click on a visible LINK with unique ID
>`Example: cy.clickLinkId('clickableLink');`

### 3. Click on a visible LINK with unique CLASS NAME
>`Example: cy.clickLinkClass('bc-github-link external external-icon');`

## **Checkbox**
### 1. Click on a visible CHECKBOX with unique Value
>`Example: cy.checkBoxValue('Accept-terms');`

### 2. Click on a visible CHECKBOX with unique ID
>`Example: cy.checkBoxId('sell-your-soul');`

### 3. Click on a visible CHECKBOX with unique CLASS NAME
>`Example: cy.checkBoxClassName('checkbox-home');`

## **Radiobutton**
### 1. Click on a visible RADIOBUTTON with unique VALUE
>`Example: cy.radioBtnValue('Accept-terms');`

### 2. Click on a visible RADIOBUTTON with unique ID
>`Example: cy.radioBtnId('sell-your-soul');`

### 3. Click on a visible RADIOBUTTON with unique CLASS NAME
>`Example: cy.radioBtnClassName('checkbox-home');`