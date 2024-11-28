describe('GUI Elements', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });




  // DROPDOWN

  it('Specifies the specific Country', function () {

    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get('#country').select('uk')
    cy.wait(1000)
    cy.get('#country').select('United States')
    cy.wait(1000)
  })


  // Multi-select dropdown

  it('Selects colors', function () {

    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get('#colors').select('red');

    cy.get('#colors').select('Green');

  });

  it('Sorted List', function () {

    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get('#animals').select('Lion');

    cy.get('#animals').select('Cheetah');

  });

 })

