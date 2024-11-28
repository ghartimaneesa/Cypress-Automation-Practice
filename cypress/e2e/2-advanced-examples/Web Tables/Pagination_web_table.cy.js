    describe('Pagination Web Table', function(){

        beforeEach(function(){
            cy.visit('https://testautomationpractice.blogspot.com/')
            cy.get('#productTable').scrollIntoView()
        })

        it('Verifying the rows and columns in the table', function(){

            cy.get('#productTable').should('be.visible')
            cy.get('#productTable tr').should('have.length', 6)
            cy.get('#productTable tr th').should('have.length', 4)
            cy.get('#productTable tr td').should('have.length', 20)
        })

        it('get the header of the table', function(){
            cy.get('#productTable').first().within(()=>{
                cy.get('th').each(($header)=>{
                    cy.log($header.text())
                })
            })
        })

        it('get all the rows value', function(){

            cy.get('#productTable tbody tr:not(:first-child)')
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($cell, index, $cells)=>{
                        cy.log($cell.text())
                    })
                })
            })
        })

        it('Verify the pagination of the table', function(){

            let pageNumbers = 4
            for(let p=1; p<=pageNumbers; p++){

                if(pageNumbers>1){
                    cy.log('active page Number..',p)
                    cy.get('#pagination li:nth-child('+p+') a').click()
                    cy.wait(5000)
                  
                    cy.get('#productTable tbody tr:not(:first-child)')
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td').each(($cell, index, $cells)=>{
                                cy.log($cell.text())
                            })
                        })
                    })
                }

            }
        })

        it('Verify the checkbox present in the select column', () => {
            
            let pageNumbers = 4
            for(let p=1; p<=pageNumbers; p++){

                if(pageNumbers>1){
                    cy.log('active page Number..',p)
                    cy.get('#pagination li:nth-child('+p+') a').click()
                    cy.wait(5000)
                    cy.get('#productTable tbody tr input[type="checkbox"]').check()
          
                    cy.get('#productTable tbody tr input[type="checkbox"]').should('be.checked')
                    
                }
            }
        })    

     
        
            it.only('should keep checkboxes checked when navigating between pages', () => {
                
                cy.get('#productTable tbody tr:nth-child(1) input[type="checkbox"]').check().should('be.checked');
                cy.get('#productTable tbody tr:nth-child(2) input[type="checkbox"]').check().should('be.checked');
                cy.get('#pagination').contains('2').click();
                cy.get('#pagination li:nth-child(2) a').click()
                cy.get('#productTable tbody tr:nth-child(2) input[type="checkbox"]').check().should('be.checked');
                cy.get('#pagination').contains('1').click();
                cy.get('#productTable tbody tr:nth-child(1) input[type="checkbox"]').should('be.checked');
                cy.get('#productTable tbody tr:nth-child(2) input[type="checkbox"]').should('be.checked');
    
                
            });
    
        

    })
