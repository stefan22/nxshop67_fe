// it gets cypress up and running w/ci

describe('starting application: landing page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.wait(7000)
  })

  it('should have top navigation menu links', () => {
    cy.get('[data-test="menu-links"] a').should('have.length', 4)
  })

  it('should have site logo', () => {
    cy.get('[data-test="logo"]').should('be.visible', true)
  })

})
