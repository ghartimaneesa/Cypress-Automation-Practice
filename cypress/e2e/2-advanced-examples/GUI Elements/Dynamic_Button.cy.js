describe('Dynamic Button Tests', () => {

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('should have the initial state with START text and green color', () => {
        cy.get('button.start')
        .should('have.text', 'START')
        .and('have.css', 'background-color', 'rgb(154, 205, 50)'); 
    });

    it('should change the button text to STOP and color to red on click', () => {
        cy.get('button.start')
        .should('exist')
        .and('have.text', 'START')
        .click();
        cy.get('button.stop')
        .should('have.text', 'STOP')
        .and('have.css', 'background-color', 'rgb(255, 0, 0)'); 
    });

    it.only('should toggle back to START and green color on the second click', () => {
       
        cy.get('button.start').click(); 
        cy.get('button.stop').click(); 
    
        cy.get('button.start')
        .should('have.text', 'START')
        .and('have.css', 'background-color', 'rgb(154, 205, 50)'); 
      });
});
  