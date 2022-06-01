describe("Test Login Form", () => {
  it("Scenario1: Email not exist", () => {
    cy.visit("http://localhost:4200/login");
    cy.get("#email").type("samehJr5@gmail.com");
    cy.get("#password").type("P12345678");
    cy.get("#submit").click();
    cy.get("#wrong_data");
  });

  it("Scenario2: Correct Email & Wrong Password", () => {
    cy.visit("http://localhost:4200/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("1PS12345678");
    cy.get("#submit").click();
    cy.get("#wrong_data");
  });

  it("Scenario3: Correct email & password", () => {
    cy.visit("http://localhost:4200/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("A12345678");
    cy.get("#submit").click();
    cy.url().should("eq", "http://localhost:4200/home");
  });

  it("Scenario4: Invalid Email Address Format", () => {
    cy.visit("http://localhost:4200/login");
    cy.get("#email")
      .type("test")
      .blur()
    cy.get("#invalid_email");
  });
});