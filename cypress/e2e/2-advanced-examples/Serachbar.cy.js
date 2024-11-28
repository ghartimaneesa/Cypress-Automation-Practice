describe('Search Bar',function(){

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/') 
    })

    it ('Serarch with the valid credentials',function(){

        cy.get("#Wikipedia1_wikipedia-search-input").type("Manisha")
        cy.get(".wikipedia-search-button").click()
        cy.wait(1000) 
        cy.contains('Manisha Koirala').click(); 
     })

     it('Search with invalid Credentials', function(){
        
        cy.get('#Wikipedia1_wikipedia-search-input').type("ooooii0u")
        cy.get(".wikipedia-search-button").click()
        cy.get('#Wikipedia1_wikipedia-search-results').should('be.visible').and('contain.text', 'No results found')
        cy.wait(1000)

     })

     it('Search with empty search bar', function(){
        
        cy.get("#Wikipedia1_wikipedia-search-input")
        cy.get(".wikipedia-search-button").click()
        cy.wait(1000)
        cy.get('#Wikipedia1_wikipedia-search-results').should('be.visible').and('contain.text', 'Please enter text to search.')
        cy.get(1000)
    })
    
    it("Verification for auto suggestion", function(){

        
        cy.get("#Wikipedia1_wikipedia-search-input").type("Manisha")
        cy.get(".wikipedia-search-button").click()
        cy.get("#Wikipedia1_wikipedia-search-results").should("be.visible")
        cy.get('#Wikipedia1_wikipedia-search-results > #wikipedia-search-result-link').should('have.length', 5)

    })
    
  
    
    


})