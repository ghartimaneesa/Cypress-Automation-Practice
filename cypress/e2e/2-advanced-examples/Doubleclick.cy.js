describe('Double Click',function(){

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.widget-content').scrollIntoView()
    })

    it('Double click on button, the text from Field1 will be copied into Field2', function(){
      
        cy.get('[ondblclick="myFunction1()"]').trigger('dblclick')
        cy.get('#field2').should('have.value','Hello World!')
    })

    it('Double click on button, the text from Field1 will be copied into Field2', function(){
       
        cy.get('#field1').should('have.value',"Hello World!")
        cy.get('#field2').should('have.value','')

    })

    it('should update Field2 with new text from Field1 on double-click', () => {
        
        cy.get('#field1').clear().type('Test Cypress');
        cy.get('[ondblclick="myFunction1()"]').trigger('dblclick');
        cy.get('#field2').should('have.value', 'Test Cypress');
    });

    it('should update Field2 with new text from Field1 on double-click', () => {
        
        cy.get('#field1').clear().type('Test Cypress');
        cy.get('[ondblclick="myFunction1()"]').click()
        cy.get('#field2').should('not.have.value', 'Single Click Test');
        cy.get('#field2').should('have.value', ''); 
    });

    it('should update Field2 with new text from Field1 on double-click', () => {
       
        cy.get('#field1').clear().type('Test Cypress');
        cy.get('[ondblclick="myFunction1()"]').click()
        cy.get('#field2').should('not.have.value', 'Single Click Test');
        cy.get('#field2').should('have.value', ''); 
    });
    it('should update Field2 with new text from Field1 on double-click', () => {
       
        cy.get('#field1').clear().type('Test Cypress');
        cy.get('[ondblclick="myFunction1()"]').click()
        cy.get('#field2').should('not.have.value', 'Single Click Test');
        cy.get('#field2').should('have.value', ''); 
    });

    it('should keep Field2 empty if Field1 has no text' ,function(){

      
        cy.get('#field1').clear()
        cy.get('[ondblclick="myFunction1()"]').trigger('dblclick')
        
        cy.get('#field2').should('have.value', ''); 
    })


})