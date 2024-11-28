import FileUpload from "../Page Source/FileUpload"

describe('Multiple File Upload',()=>{


    var multiplefileupload = new FileUpload()

   
    beforeEach(function() {

        cy.fixture('example').then((data) => {
            this.data = data; 
        });
       
    });

    it('Verify the visibility of the buttons', function(){
        cy.visit(this.data.url)
        cy.Multiplefileformvisibility()
    })

    it('should upload multiple files',function(){

        cy.visit(this.data.url)
        cy.Uploadmultiplefile()
    })



    it('should show an error if no file is selected when upload is clicked', function(){
        cy.visit(this.data.url)
        cy.ErrorMessage()
    })
    

})