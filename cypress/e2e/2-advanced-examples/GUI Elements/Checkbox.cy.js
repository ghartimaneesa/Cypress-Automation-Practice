describe('checkbox', function(){
    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    
    
    it('Should be unchecked by default', function () {
      
        cy.get('.form-group #sunday').uncheck().should('not.be.checked')
        cy.get('.form-group #monday').uncheck().should('not.be.checked')
        cy.get('.form-group #tuesday').uncheck().should('not.be.checked')
        cy.get('.form-group #wednesday').uncheck().should('not.be.checked')
        cy.get('.form-group #thrusday').uncheck().should('not.be.checked')
        cy.get('.form-group #friday').uncheck().should('not.be.checked')
        cy.get('.form-group #saturday').uncheck().should('not.be.checked')
    
    })

    it('should check the box when clicked', function(){
        cy.get('.form-group #sunday').check().should('be.checked')
        cy.get('.form-group #monday').check().should('be.checked')
        cy.get('.form-group #tuesday').check().should('be.checked')
        cy.get('.form-group #wednesday').check().should('be.checked')
        cy.get('.form-group #thursday').check().should('be.checked')
        cy.get('.form-group #friday').check().should('be.checked')
        cy.get('.form-group #saturday').check().should('be.checked')
    })

    it.only('uncheck the checked box', function(){
        cy.get('.form-group #sunday')
        .check()
        cy.wait(1000)
        cy.get('.form-group #sunday').uncheck().should('not.be.checked')
        cy.get('.form-group #wednesday')
        .check()
        cy.wait(1000)
        cy.get('.form-group #wednesday').should('be.checked')
    })




})