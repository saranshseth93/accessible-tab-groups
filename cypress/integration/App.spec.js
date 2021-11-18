describe("checking the inital tab selection", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/");
  });
  it("should display the first tab panel by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that the tab panel is visible for the active tab and the other doesn't exist,
    // By default the first tab is active so tab-1 should is visible and tab-2 should not exist
    cy.get("#tab-1").should("exist");
    cy.get("#tab-2").should("not.exist");
  });

  it("should display the tab panel for the tab which is clicked", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that the tab panel is visible for the active tab and the other doesn't exist,
    // By default the first tab is active so tab-1 should is visible and tab-2 should not exist
    cy.get("#tab-3-parent").click();
    cy.get("#tab-2").should("not.exist");
    cy.get("#tab-2").should("not.exist");
    cy.get("#tab-3").should("exist");
  });

  it("should display the last selected tab on reload", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that the tab panel is visible for the active tab and the other doesn't exist,
    // By default the first tab is active so tab-1 should is visible and tab-2 should not exist
    cy.get("#tab-3-parent").click();
    cy.reload();
    cy.get("#tab-2").should("not.exist");
    cy.get("#tab-2").should("not.exist");
    cy.get("#tab-3").should("exist");
  });

  it("Tabs has no detectable accessibility violations on load", () => {
    cy.injectAxe();
    cy.get("#tab-1-parent").click();

    cy.get(".cypress-wrapper").each((element, index) => {
      cy.checkA11y(".cypress-wrapper", {
        runOnly: {
          type: "tag",
          values: ["wcag2a"],
        },
      });
    });
  });
});

describe("checking the url tab selection", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/#Croc");
  });
  it("should display the second tab panel by url", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that the tab panel is visible for the active tab and the other doesn't exist,
    // By default the first tab is active so tab-1 should is visible and tab-2 should not exist
    cy.get("#tab-2").should("exist");
    cy.get("#tab-1").should("not.exist");
  });
});
