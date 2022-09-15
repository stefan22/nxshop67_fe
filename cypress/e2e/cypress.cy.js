describe('App', () => {

  it('Both Jest & Cypress up/running w/ Prettier in CI', () => {
    cy.visit('http://localhost:3003')
    cy.wait(2000);
    cy.fixture("product").should("deep.equal",
      {name: "Vans", desc: "OFF THE WALL", price: "£300.00"})
  })
})
