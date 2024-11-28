// require('cypress-drag-drop'); 
describe('Slider-Price Range',function(){

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#amount').scrollIntoView()
    })
    
    it('Verify initial slider positions and price range', () => {
        
        cy.get('.ui-slider-handle').first().should('have.attr', 'style', 'left: 15%;')
       
        cy.get('.ui-slider-handle').last().should('have.attr', 'style', 'left: 60%;')
        
       
        cy.get('#amount').should('have.value','$75 - $300')
    })   

    it('should move the left handle to the minimum value ', () => {
        cy.get('#slider-range .ui-slider-handle').first()
            .trigger('mousedown', { which: 1 });
    
        
        for (let x = 100; x >= 95; x -= 5) { 
            cy.get('#slider-range .ui-slider-handle').first()
                .trigger('mousemove', { pageX: x })
                .wait(50);
        }
    
        cy.get('#slider-range .ui-slider-handle').first().trigger('mouseup');
    
        
        cy.get('#amount').should('have.value','$0 - $300')
    });

  

    
    
    









   
    




    
    
    
    
    
    
    
    
    
    

    
    
    
})