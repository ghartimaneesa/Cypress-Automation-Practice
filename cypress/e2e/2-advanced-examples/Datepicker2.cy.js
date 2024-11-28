describe('datepicker2',function(){

    beforeEach(()=>{
        
        cy.visit('/2018/09/automation-form.html', { waitForAnimations: false, failOnStatusCode: false });

    })

    it('should open the datepicker on input click', () => {
        cy.get('#txtDate').click(); 
        cy.get('#ui-datepicker-div').should('be.visible');
    });

    it('should display month and year dropdowns in the datepicker', () => {
        cy.get('#txtDate').click();
        cy.get('.ui-datepicker-title .ui-datepicker-month').should('be.visible');
        cy.get('.ui-datepicker-title .ui-datepicker-year').should('be.visible');
    });

    it.only('should select a specific date', () => {
        const targetDate = '15'; 
    
        cy.get('#txtDate').click();
        cy.get('.ui-datepicker-calendar').contains(targetDate).click();
        cy.get('#txtDate').should('have.value', '15/11/2024'); // Adjust the date format as per your system
    });
    
    
    
    it('should select a whole date and verify it appears in the date input field', () => {
        const targetMonth = 'Oct'; 
        const targetYear = '2024'; 
        const targetDay = '15'; 
        const expectedDate = '15/10/2024'; 


        // Open the datepicker
        cy.get('#txtDate').click(); 
        // Select the month
        cy.get('.ui-datepicker-month').select(targetMonth);
    
        // Select the year
        cy.get('.ui-datepicker-year').select(targetYear);
    
        // Select the day
        cy.get('.ui-datepicker-calendar').contains(targetDay).click();
    
        
        cy.get('#txtDate').should('have.value', expectedDate);
    });
    
})