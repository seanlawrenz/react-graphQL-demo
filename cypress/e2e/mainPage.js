describe('mainPage', () => {
  it('should load without errors', () => {
    cy.visit('/')
      .wait(500)
      .get(':nth-child(1) > :nth-child(1) > [data-testid="new webhook"]')
      .click()
      .wait(500)
      .getByText(/back/i)
      .click()
      .wait(500)
      .assertHome();
  });
});
