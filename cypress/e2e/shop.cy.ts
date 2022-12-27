describe("Shop", () => {
  it("should display the shop page", () => {
    cy.visit("/shop");
    cy.get("h1").should("contain", "Shop");
  });
  it("adds items to the total", () => {
    cy.visit("/shop");
    cy.get("button").contains("Purchase").click({ multiple: true });
    let total = 0;
    cy.get("[data-cy=itemPrice]")
      .each((el) => {
        total += parseFloat(el.text());
      })
      .then(() => {
        console.log(total);
        cy.get("[data-cy=totalPrice]").contains(`Total: ${total.toFixed(2)}`);
      });
  });
});
