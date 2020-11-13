describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="cname"]');
  const sizeSelect = () => cy.get('select[name="size"]');
  const pickSauce = () => cy.get("#submitBtn");
  const orderButton = () => cy.get('button[name="orderBtn"]');
  const homeButton = () => cy.get('button[name="homeBtn"]');
  const submitButton = () => cy.get('button[name="submitBtn"]');


it(`hopefully isn't broken already`, () => {
    expect(1+1).to.be.equal(2);
    expect(2+2).not.to.equal(5);
})

it(`can find the componnents it's looking for`, () => {
    nameInput().should('exist');
    submitButton().should('exist');
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
        .check().should('be.checked')
        .uncheck().should('not.be.checked');
    cy.get('.action-radios [type="radio"]').not('[disabled]')
      .check().should('be.checked')
})

it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Timmy")
      .should("have.value", "Timmy");

 it('can select a size', () => {
    
    cy.get('.action-select')
      .should('have.value', '---Choose your size---')
    cy.get('.action-select').select('Small')
    cy.get('.action-select').should('have.value', 'Small')
    
 })
it("submit button disabled until proper inputs are filled out", () => {
    submitButton().should("be.disabled");
    nameInput().should("have.value", "");
    cy.get('.action-select').should("have.value", "");
    submitButton().should("be.disabled");
    nameInput().type("Timmy");
    cy.get('.action-select').select('Small');
    submitButton().should("be.not.disabled");
    textInput().clear();
  });

  it("can submit a new pizza", () => {
    cy.contains('Timmy').should("not.exist");
    textInput().type("Timmy");
   cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')
    cy.get('.action-select').select('Small')
    submitButton().click()
    expect(location.hostname).to.eq('localhost:3000/')
  });
})
})