describe('New Tab',function(){

    it('Verify navigation to the new tab',function(){

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.contains('New Tab').click()

    })
})


//popup windows

it('Popup Windows',function(){

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#PopUp').should('be.visible').click()

})