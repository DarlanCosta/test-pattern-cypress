Cypress.Commands.add("fillFormAndSubmit", () => {
  cy.get("#nome").as("name").type("Darlan");
  cy.get("#sobrenome").as("lastName").type("Costa");
  cy.get("#email").as("email").type("hello@darlancosta.dev");
  cy.get('input[type="radio"][value="fullstack"]').as("fullstackRadio").check();
  cy.get("#senioridade").as("seniority").select("Senior");
  cy.get('input[type="checkbox"][value="HTML"]').as("htmlCheckbox").check();
  cy.get('input[type="checkbox"][value="CSS"]').as("cssCheckbox").check();
  cy.get('input[type="checkbox"][value="Javascript"]').as("jsCheckbox").check();
  cy.get(".botao").click();
});

Cypress.Commands.add("assertFormInitialState", () => {
  cy.get("@name").should("be.empty");
  cy.get("@lastName").should("be.empty");
  cy.get("@email").should("be.empty");
  cy.get("@fullstackRadio").should("not.be.checked");
  cy.get('input[type="radio"][value="frontend"]').should("be.checked");
  cy.get("@seniority").find("option").contains("Select").should("be.selected");
  cy.get("@htmlCheckbox").should("not.be.checked");
  cy.get("@cssCheckbox").should("not.be.checked");
  cy.get("@jsCheckbox").should("not.be.checked");
  cy.get('input[type="checkbox"][value="PHP"]').should("not.be.checked");
  cy.get('input[type="checkbox"][value="C#"]').should("not.be.checked");
  cy.get('input[type="checkbox"][value="Python"]').should("not.be.checked");
  cy.get('input[type="checkbox"][value="Java"]').should("not.be.checked");
});
