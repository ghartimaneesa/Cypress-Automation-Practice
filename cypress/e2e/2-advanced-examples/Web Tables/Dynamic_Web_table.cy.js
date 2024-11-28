describe('Dynamic Web Table', function () {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/?m=1')
        cy.get('#taskTable').scrollIntoView()
    })

    it('Verify the rows and columns in the table', () => {

        cy.get('#taskTable tbody tr').should('have.length', 4)
        cy.get('#taskTable tr th').should('have.length', 5)
        cy.get('#taskTable tr td').should('have.length', 20)
    })

    it('Logs all rows values in the table', function () {
        cy.get('#taskTable tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($cell) => {
                    cy.log($cell.text())
                })
            })
        })
    })

    it('Display the cpu load process', () => {

        cy.get('#displayValues ').should('be.visible')
        cy.get('#displayValues .chrome-cpu')
            .invoke('text')
            .then((cpuLoadText) => {
                
                expect(cpuLoadText).to.match(/^\d+(\.\d+)?%$/);
                cy.log('CPU load is:', cpuLoadText);
            })

    })

    it('Memory size of firefox process', () => {

        cy.get('#displayValues ').should('be.visible')
        cy.get('#displayValues .firefox-memory')
            .invoke('text')
            .then((firefoxprocessText) => {
                
                expect(firefoxprocessText).to.match(/^\d+(\.\d+)? MB$/);

                cy.log('Memory Size of firefox is:', firefoxprocessText);
            })

    })

    it('Network speed of Chrome process: ', () => {

        cy.get('#displayValues ').should('be.visible')
        cy.get('#displayValues .chrome-network')
            .invoke('text')
            .then((NetworkSpeed) => {
                
                expect(NetworkSpeed).to.match(/^\d+(\.\d+)? Mbps$/);

                cy.log('Network Speed of chrome is:', NetworkSpeed);
            })
    })

    it('Disk space of Firefox process:', () => {

        cy.get('#displayValues ').should('be.visible')
        cy.get('#displayValues .firefox-disk')
            .invoke('text')
            .then((DiskSpace) => {
                
                expect(DiskSpace).to.match(/^\d+(\.\d+)? MB\/s$/);

                cy.log('Disk space of Firefox process:', DiskSpace);
            })

    })

    
})