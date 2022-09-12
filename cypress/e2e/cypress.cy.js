// it lets me get cypress up and running for now
// but essentially I need products data from GQL backend for fe to run

describe('App', () => {

  it('Adds Cypress settings to project and passes CI ___tests___', () => {
    cy.visit('http://localhost:3003')
    cy.wait(2000);
    cy.fixture("product").should("deep.equal",
      {name: "Vans", desc: "OFF THE WALL", price: "£300.00"})
  })
})
