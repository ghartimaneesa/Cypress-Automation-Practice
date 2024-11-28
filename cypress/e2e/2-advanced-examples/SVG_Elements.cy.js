describe('SVG ELEMENTS', function(){

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/?m=1')
        cy.get('.svg-container').scrollIntoView()
    })


    it('Verify the width and height of the box where the circle is located', ()=>{

        cy.get('svg').should('have.attr','width', '30')
        .and('have.attr', 'height', '30')
    })

    it('should increase the size of the SVG container dynamically', () => {
       
        cy.get('svg').then((svg) => {
          cy.wrap(svg).invoke('attr', 'width', '60');
          cy.wrap(svg).invoke('attr', 'height', '60');
        });
    
        
        cy.get('svg')
          .should('have.attr', 'width', '60')
          .and('have.attr', 'height', '60');
    });
    
      
    it.only('should dynamically update circle position when resizing the container', () => {
        cy.get('svg')
          .invoke('attr', 'width', '60')
          .invoke('attr', 'height', '60');
      
        // Adjust the circle's cx and cy to keep it centered
        cy.get('circle')
          .invoke('attr', 'cx', '30')
          .invoke('attr', 'cy', '30');
      
        cy.get('circle').then(($circle) => {
          const circleCx = parseInt($circle.attr('cx'));
          const circleCy = parseInt($circle.attr('cy'));
      
          cy.get('svg').should(($svg) => {
            const svgWidth = parseInt($svg.attr('width'));
            const svgHeight = parseInt($svg.attr('height'));
      
            expect(circleCx).to.equal(svgWidth / 2);
            expect(circleCy).to.equal(svgHeight / 2);
          });
        });
      });
      
      

    it('should display the circle with correct attributes', () => {
        cy.get('circle')
          .should('have.attr', 'cx', '15')
          .and('have.attr', 'cy', '15')
          .and('have.attr', 'r', '7')
          .and('have.attr', 'stroke', 'black' )
          .and('have.attr', 'stroke-width', '1')
          .and('have.attr', 'fill', 'red' )
    });

   



    it('should display the rectangle with correct attributes', () => {
        cy.get('rect')
          .should('have.attr', 'x', '3')
          .and('have.attr', 'y', '5')
          .and('have.attr', 'width', '24')
          .and('have.attr', 'height', '15')
          .and('have.attr', 'stroke', 'black' )
          .and('have.attr', 'fill', 'green');
    });
})