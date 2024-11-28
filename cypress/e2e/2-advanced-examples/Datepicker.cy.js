import  Datepicker1 from "/home/manisha/CypressAutomation/cypress/e2e/2-advanced-examples/Page Source/Datepicker_PS.js"


describe('Datepicker', function(){

    var datepicker = new  Datepicker1();


    it('DatePicker1', function(){
        
        cy.visit('/2018/09/automation-form.html', { waitForAnimations: false, failOnStatusCode: false });


        datepicker.getdatepicker().click();
        cy.wait(1000)
        datepicker.getCalender().should('be.visible');
        cy.wait(1000)
    });

    it('Select Date', function(){
        
        cy.visit('/2018/09/automation-form.html', { waitForAnimations: false, failOnStatusCode: false });

        
        cy.selectYear(2022)

        cy.selectMonth('March')

        cy.selectDate(16)
        
        
    })
   
});
