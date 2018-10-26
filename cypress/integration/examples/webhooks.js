describe('Webhooks', () => {
  it('loads', () => {
    cy.visit('http://localhost:3000/#/')
      .get(':nth-child(1) > :nth-child(4) > .btn > .fa')
      .click();
  });
});