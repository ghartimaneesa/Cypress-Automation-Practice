describe('Mouse Hover', function(){

    it('Move the mouse over the button to open the dropdown menu', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.dropdown-content').invoke('show')
        cy.wait(1000)
        
    })


    it('while clicking on the dropdown menu no changes', function(){


        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.contains('Point Me').should('be.visible')
        cy.get('.dropdown-content').invoke('show')
        cy.contains('.dropdown-content a', 'Mobiles').click();
        cy.url().should('match', /^https:\/\/testautomationpractice\.blogspot\.com\/#?$/);
    })
})
