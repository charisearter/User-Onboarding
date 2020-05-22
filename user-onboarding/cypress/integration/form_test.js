describe('Go to Website', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost')
  })
})
describe('check button', () => {
  it('is button disabled at a start', () => {
    cy.get('button.btn')
    .should('be.disabled')
  })
})

describe('can type in fields', () => {
  it('can type first name', () => {
    cy.get('input[name="fname"]')
    .type('Skittles')
    .should('have.value', 'Skittles')
  })

  it('can type last name', () => {
    cy.get('input[name="lname"]')
    .type('Rainbow')
    .should('have.value', 'Rainbow')
})

  it('can type email', () => {
   cy.get('input[name="email"]')
   .type('taste@therainbow.com')
   .should('have.value', 'taste@therainbow.com')
})

  it('can type password', () => {
    cy.get('input[name="password"]')
    .type('#Rainbow1')
    .should('have.value', '#Rainbow1')
  })
})

describe('checkbox check', () => {
  it('can the checkbox be checked', () => {
    cy.get("input[name='terms']")
      .not("[disabled]")
      .check()
      .should("be.checked");
  })
})

describe('empty spots on form', () => {
  it('is anthing not filled out', () => {
    cy.get("input[name='fname']").should("not.have.value");
    cy.get("input[name='lname']").should("not.have.value");
    cy.get("input[name='email']").should("not.have.value");
    cy.get("input[name='password']").should("not.have.value");
    cy.get("input[name='terms']").should("be.checked");
  })
})

describe('submit the form', () => {
  it("user can submit form", () => {
    cy.get("button.submit")
    .should("not.be.disabled");
  })  
})


