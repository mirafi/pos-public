describe('Submit Order', () => {
  it('opens the page and clicks the button', () => {
    // 1. Open the Angular app
    cy.visit('/start-order') // uses baseUrl from cypress.config.ts
    cy.get("#start-oder-btn").click()


    cy.get('[data-cy=category]')
      .should('be.visible')
      .its('length')
      .then((count) => {
          let item = {
            quantity: 0,
    totalPrice: 0,
          }

for (let i = 0; i < count; i++) {

          cy.get('[data-cy=category]').eq(i).should('be.visible').click().then(() => {


            cy.get('[data-cy=item]').should('be.visible').each((itemElement, itemIndex) => {
              console.log("item.quantity", item.quantity);
              cy.wrap(itemElement).click()

              item.quantity++;
              cy.get("#totalQuantity").should('be.visible').should('have.text', String(item.quantity))
            })
          })

          cy.get('#goBackBtn').click()
          cy.wait(100)
        }
      })
  });
});
