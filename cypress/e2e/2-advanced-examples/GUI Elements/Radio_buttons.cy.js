describe('Radio buttons', function(){
    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

it('Checking the  male', function () {
     cy.get('input[value="male"]').should('be.visible').check()
     cy.get('input[value="male"]').should('be.visible').should('be.checked')
     cy.wait(3000)
     cy.get('input[value="female"]').should('be.visible')
     cy.get('input[value="female"]').should('be.visible').should('not.to.be.checked')
     cy.wait(3000)
})

it('Checking the  female', function () {
    cy.get('input[value="female"]').should('be.visible').check()
    cy.get('input[value="female"]').should('be.visible').should('be.checked')
    cy.wait(3000)

    cy.get('input[value="male"]').should('be.visible')
    cy.get('input[value="male"]').should('be.visible').should('not.to.be.checked')
    cy.wait(3000)
})

})