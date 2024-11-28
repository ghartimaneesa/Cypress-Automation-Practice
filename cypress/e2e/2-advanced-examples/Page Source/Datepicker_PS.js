class Datepicker1 {

    getdatepicker(){
        return cy.get('#datepicker')
    }

    getCalender(){
        return cy.get('#ui-datepicker-div')
    }

    getNavigateBack(){
        return cy.get('.ui-datepicker-prev .ui-icon-circle-triangle-w')
    }

    getNavigateForward(){
        return cy.get('.ui-icon.ui-icon-circle-triangle-e')
    }

    getMonth(){
        return cy.get('.ui-datepicker-title .ui-datepicker-month')
    }

    getyearName(){
        return cy.get('.ui-datepicker-header .ui-datepicker-title .ui-datepicker-year');
    }

    getDay(){
        return cy.get('.ui-datepicker-calendar .ui-state-default')
    }
}

export default Datepicker1
