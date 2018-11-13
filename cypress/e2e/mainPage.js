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

  it('should navigate back to main on hitting cancel on a webhook', () => {
    cy.visit('/')
      .wait(500)
      .get(':nth-child(1) > :nth-child(1) > [data-testid="new webhook"]')
      .click()
      .wait(500)
      .getByTestId('cancel-button')
      .click()
      .wait(500)
      .assertHome();
  });
});
