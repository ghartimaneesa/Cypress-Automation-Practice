describe('alerts and pops', function(){

    beforeEach(()=>{
      
        cy.visit('/2018/09/automation-form.html', { waitForAnimations: false, failOnStatusCode: false });

    })

    it('Handles the simple Alert button', function(){
        
        cy.get("#alertBtn").click()
    
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am an alert box!');
        });
        
    });
    

    
    it('Handles the Confirmation Alert button', function(){
        
        cy.get('#confirmBtn').click() 
        cy.on('window:confirm', () => false)
        // cy.on('window:confirm', () => true)
        cy.get('#demo').should('have.text','You pressed Cancel!')
        
    })

    it.only('Handles prompt alert button',function(){

        //this method is tiggred bwfore the window is open.
                    //capturing that window in the varaible    
        cy.window().then(($Var)=>{
            cy.stub($Var,'prompt').returns("manisha")
            cy.contains('Prompt Alert').click()
        })
        cy.get('#demo').should('have.text','Hello manisha! How are you today?')
    })

})