describe("close Modal", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    if (
      err.message.includes(
        "Failed to execute 'observe' on 'IntersectionObserver'"
      )
    ) {
      return false;
    }
  });

  it("close modal", () => {
    cy.visit("https://www.andwander.com/items/bottoms/5742282389.html").then(
      () => {
        console.log("Successfully visited the page");
        cy.get("#zigzag-worldshopping-checkout", { includeShadowDom: true })
          .find("#zigzag-test__modal-close", {
            includeShadowDom: true,
            timeout: 10000,
          })
          .click();
      }
    );
  });
});
