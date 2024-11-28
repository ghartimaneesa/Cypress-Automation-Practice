describe('Input Fields', function(){


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    
    //Enter Name
    it('Verify the name field with valid data', function () {
    
        cy.get('input[placeholder="Enter Name"]')
        .should('be.visible')
        .should('be.enabled')
        .type("Manisha")
    
        cy.wait(3000)
    
    })
    
    it('Should verify the maximum length of the Name field (15 characters)', () => {
        cy.get('#name').type('ThisIsMoreThan15Chars');
        cy.get('#name').should('have.value', 'ThisIsMoreThan1');
    });

    //Enter Email

    it('Verify the email field with valid data', function () {
    
        cy.get('input[placeholder="Enter EMail"]')
        .should('be.visible')
        .should('be.enabled')
        .type("Manisha@gmail.com")
    
        cy.wait(3000)

        cy.get('input[placeholder="Enter EMail"]').should('have.value','Manisha@gmail.com')
    
    })

    it('Verify the email field for maximum length(25 characters)', function () {
    
        cy.get('input[placeholder="Enter EMail"]')
        .should('be.enabled')
        .type("Manishaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com")
    
        cy.wait(3000)

        cy.get('input[placeholder="Enter EMail"]').should('have.value','Manishaaaaaaaaaaaaaaaaaaa')
    
    })
    
    //Phone

    it('Verify the  phone number field with the valid inputs)', function () {
    
        cy.get('input[placeholder="Enter Phone"]')
        .should('be.enabled')
        .type("9887452514")
    
        cy.wait(1000)

        cy.get('[placeholder="Enter Phone"]').should('have.value','9887452514')
    })

    it('Verify the  phone number field with maximum length (10 characters)', function () {
    
        cy.get('input[placeholder="Enter Phone"]')
        .should('be.enabled')
        .type("9999999999999999998888888888888887777777777")
    
        cy.wait(1000)

        cy.get('[placeholder="Enter Phone"]').should('have.value','99999999999')
    })


    //Address

    it('Verify the address with valid data ', function () {
    
        cy.get('#textarea')
        .should('be.enabled')
        .type("Bhaktapur")
    
        cy.wait(1000)

        cy.get('#textarea').should('have.value','Bhaktapur')
    })

    it('should allow resizing of the textarea', () => {
       
        
        
        cy.get('#textarea') 
          .should('be.visible')
          .then(($textarea) => {
        
            const initialHeight = $textarea.height(); //initial heights
    
            
            cy.get('#textarea')
           
              .invoke('css', 'height', '300px');
              
              cy.get('#textarea').then(($resizedTextarea) => {
            
              expect($resizedTextarea.height()).to.be.greaterThan(initialHeight);
            });
          });
      });

})  
