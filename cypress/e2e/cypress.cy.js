// it gets cypress up and running w/ci

describe('starting application: landing page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.wait(7000)
  })

  it('should have top navigation menu links', () => {
    cy.get('[data-testid="menu-links"] a').should('have.length', 4)
  })

  it('should have site logo', () => {
    cy.get('[data-testid="logo"]').should('be.visible', true)
  })

  it('should route user to products page when clicking products', () => {
    // const products = cy.get('[data-testid="menu-links"] > a:nth-child(1)');
    cy.get('[data-testid="menu-links"] > a[href="/products"]').click();
    cy.url().should('include', '/products');
  })

  it('should route user to sign in with clicking signin', () => {
    cy.get('[data-testid="menu-links"] a[href="/signin"]').click();
    cy.url().should('include', '/signin')
  })

})
