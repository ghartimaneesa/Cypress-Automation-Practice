describe('Static Web Table',function(){

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').scrollIntoView()
    })

    it('Verify the total no of rows and columns in the table', function(){
        
        cy.get('[name="BookTable"] tr').should('have.length',7)
        cy.get('[name="BookTable"] tr th').should('have.length',4)
        cy.get('[name="BookTable"] tr td').should('have.length',24)

    })

    it('print header values only', function() {
        cy.get('[name="BookTable"] tbody tr').first().within(() => {
            cy.get('th').each(($header) => {
                cy.log($header.text());
            })
        })
    })

    
    it('get all rows value', function(){

        cy.get('[name="BookTable"] tbody tr:not(:first-child')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($cell, index, $cells)=>{
                    cy.log($cell.text())
                })
            })
        })
    })


})