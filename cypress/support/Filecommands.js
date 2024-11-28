 import 'cypress-file-upload'
 import FileUpload from '../e2e/2-advanced-examples/Page Source/FileUpload'

 var fileupload = new FileUpload()


Cypress.Commands.add('Uploadsinglefile',function(){

    fileupload.getSingleFile().attachFile('test1.pdf')
    fileupload.getSingleFileSubmit().click()
    fileupload.getsinglefilestatus().should('have.text','Single file selected: test1.pdf, Size: 21 bytes, Type: application/pdf')
})


Cypress.Commands.add('SingleFileFormVisibility',function(){

    fileupload.getSingleFile().should('be.visible')
    fileupload.getSingleFileSubmit().should('be.visible')
})

Cypress.Commands.add('SingleFileStatus',function(){

    fileupload.getSingleFileSubmit().should('be.visible').click()
    fileupload.getsinglefilestatus().should('have.text', 'No file selected.')
    
})

Cypress.Commands.add('Multiplefileformvisibility',function(){

    fileupload.getMultiplefile().should('be.visible')
    fileupload.getMultiplefileSubmit().should('be.visible')
    
})

Cypress.Commands.add('Upload multiple file',function(){

    fileupload.getMultiplefile().attachFile('test1.pdf , test2.pdf')
    fileupload.getMultiplefileSubmit().click()
    
})

Cypress.Commands.add('show the error message when no file is uploaded',function(){

    fileupload.getMultiplefileSubmit().click()
    fileupload.getMultiplefileStatus().should('have.text','No File Selected!')
})