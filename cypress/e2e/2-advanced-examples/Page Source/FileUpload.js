class FileUpload{
    
    
    getSingleFile(){
        return cy.get('#singleFileInput')
    }

    getSingleFileSubmit(){
        return cy.get('#singleFileForm [type="submit"]')
    }

    getsinglefilestatus(){
        return cy.get('#singleFileStatus')
    }

    getMultiplefile(){
        return cy.get('#multipleFilesInput')
    }

    getMultiplefileSubmit(){
        return cy.get('#multipleFilesForm [type="submit"]')
    }

    getMultiplefileStatus(){
        return cy.get('#multipleFilesStatus')
    }


}

export default FileUpload