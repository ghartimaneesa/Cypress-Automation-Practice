describe('My First Test Case', function(){
    it ('Verify the Title of the page',function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title().should('eq', 'Automation Testing Practice')

    })

    it ('Verify the Title of the page',function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title().should('eq', 'utomation Testing Practice')

    })
})