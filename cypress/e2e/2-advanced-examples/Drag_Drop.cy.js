
require ('@4tw/cypress-drag-drop')


describe('Drag and Drop', function(){

    it('Drag a object to the target', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#draggable').should('be.visible')
        cy.get('#droppable').should('be.visible')

        cy.get('#draggable').drag('#droppable',{force:true})
        cy.get('#droppable').should('contain', 'Dropped!').should('have.css','background-color','rgb(255, 250, 144)')
        
    })

    it('Verify Initial Color of the target', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#draggable').should('be.visible')
        cy.get('#droppable').should('be.visible')

        cy.get('#droppable').should('contain','Drop here')
        cy.get('#droppable').should('have.css', 'background-color','rgb(233, 233, 233)')
    })

  
        it('should change target highlight when source is returned', function() {
            cy.visit('https://testautomationpractice.blogspot.com/');
            
            
            cy.get('#draggable').should('be.visible');
            cy.get('#droppable').should('be.visible');
    
            
            cy.get('#draggable').drag('#droppable', { force: true });
            
           
            cy.get('#droppable')
                .should('contain', 'Dropped!')
                .should('have.css', 'background-color', 'rgb(255, 250, 144)'); 
    
         
            cy.get('#draggable').trigger('dragstart'); 
            cy.get('#droppable').trigger('dragover', { force: true }); 
            cy.get('#droppable').trigger('drop', { force: true }); 
            cy.get('#draggable').trigger('dragend'); 
    
            
            cy.get('#droppable').should('have.css', 'background-color', 'rgb(233, 233, 233)'); 
        });
    
    
})