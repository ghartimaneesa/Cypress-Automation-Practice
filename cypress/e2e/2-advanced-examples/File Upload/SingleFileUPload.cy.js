import FileUpload from "../Page Source/FileUpload";

describe('FileUpload', function(){

    var fileupload = new FileUpload()

    beforeEach(function() {

        cy.fixture('example').then((data) => {
            this.data = data; 
        });
       
    });

    it('Single file form visibility', function(){
        cy.visit(this.data.url);
        cy.SingleFileFormVisibility()
    })
    

    it('Upload Single File',function(){
        cy.visit(this.data.url);
        
        cy.Uploadsinglefile();
        
    })

    it('File status when no file is selected to upload', function(){
        cy.visit(this.data.url)
        
        cy.SingleFileStatus()

    })

})


























//     it('should handle file type validation errors', function(){
//         cy.get('#singleFileInput').attachFile('run-1711703128895-part-block-0-0-r-00000-snappy.parquet')
//         cy.get('#singleFileForm [type="submit"]').click()
//         cy.get('#singleFileStatus').should('have.text', 'Single file selected: run-1711703128895-part-block-0-0-r-00000-snappy.parquet, Size: 604271 bytes, Type: null')
//         cy.wait(5000)
//     })


//     it('Rename the file', function(){
//         cy.get('#singleFileInput').attachFile({filePath:'test1.pdf', fileName:'mytest.pdf'})
//         cy.get('#singleFileForm [type="submit"]').click()
//         cy.wait(5000)
//         cy.get('#singleFileStatus').should('have.text','Single file selected: mytest.pdf, Size: 21 bytes, Type: application/pdf')
//     })


