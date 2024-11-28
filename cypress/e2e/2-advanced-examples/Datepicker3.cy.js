describe('Datepicker3', function(){
    beforeEach(()=>
        {
            cy.visit('/2018/09/automation-form.html')
        })

    it('should select a whole date and verify it appears in the date input field', function(){

        const start_date = '2001-04-13'
        const end_date = '2001-10-11'

        // Calculate the date difference in days
        const startDateObj = new Date(start_date)
        const endDateObj = new Date(end_date)
        const actualRange = Math.floor((endDateObj - startDateObj) / (1000 * 60 * 60 * 24))

        cy.get('#start-date').should('be.enabled').type(start_date)
        cy.get('#end-date').should('be.enabled').type(end_date)
        cy.get('.submit-btn').click()

        cy.get('#result').should('contain.text', actualRange.toString())
    })
})
