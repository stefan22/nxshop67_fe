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

// Cypress.Commands.add('waitForApp', () => {
//   return cy.wrap(
//     new Promise((resolve) => {
//       cy.window().then((win) => {
//         win.addEventListener('sveltekit:start', resolve);
//       });
//     }),
//   );
// });

// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false
// })
//
// Cypress.on('fail', (error, runnable) => {
//   debugger
//
//   // we now have access to the err instance
//   // and the mocha runnable this failed on
//
//   throw error // throw error to have test still fail
// })
//
// it('calls the "fail" callback when this test fails', () => {
//   // when this cy.get() fails the callback
//   // is invoked with the error
//   cy.get('element-that-does-not-exist')
// })
