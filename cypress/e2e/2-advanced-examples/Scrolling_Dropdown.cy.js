describe('Scrolling Dropdwon', ()=>{

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#comboBox').scrollIntoView()
    })

    it('should open the dropdown on click', () => {
        cy.get('#comboBox').click();
        cy.get('#dropdown').should('be.visible');
    });

    it('should display the correct default placeholder after loading', () => {
        cy.get('#comboBox')
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('eq', 'Select an item');
    });
      

    it('should select an item from the custom dropdown', () => {
   
        cy.get('#comboBox').should('be.visible').click()
        cy.get('#dropdown')
        .find('div')
        .contains('Item 1')
        .click()
        cy.get('#comboBox').should('have.value', 'Item 1');
        
    })

    it('should scroll and select an item from the custom dropdown', ()=>{

        cy.get('#comboBox').should('be.visible').click()
        cy.get('#dropdown')
        .find('div')
        .contains('Item 100')
        .scrollIntoView()
        .click()
        cy.wait(5000)
    })

    it('should close the dropdown after selecting an item', () => {
        cy.get('#comboBox').click();
        cy.get('#dropdown').find('div').contains('Item 2').click();
        cy.get('#dropdown').should('not.be.visible');
    });

})