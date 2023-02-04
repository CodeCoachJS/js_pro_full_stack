export default describe("Shop", () => {
  it("adds items to the total and increments the total", () => {
    // visit the url
    cy.visit("/shop");

    // click on every button to purchase every item
    cy.get("[data-cy=purchaseButton]").click({ multiple: true });

    // check that total matches combination of all prices
    let total = 0;

    cy.get("[data-cy=itemPrice]")
      .each((el) => {
        total += parseFloat(el.text());
      })
      .then(() => {
        cy.get("[data-cy=totalPrice]").contains(`Total: ${total.toFixed(2)}`);
      });
  });
});
