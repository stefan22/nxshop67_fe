describe('App', () => {
  it('Loads page', () => {
    cy.visit('http://localhost:3003')
    cy.contains('Vans')
  })
})
