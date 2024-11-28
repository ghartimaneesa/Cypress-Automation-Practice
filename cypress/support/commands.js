// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Datepicker1 from "/home/manisha/CypressAutomation/cypress/e2e/2-advanced-examples/Page Source/Datepicker_PS.js";
import DateUtlis from "./Utility/DateUtlis.cy";
// import FileUpload from "../e2e/2-advanced-examples/Page Source/FileUpload";
import 'cypress-file-upload';


var datePicker = new Datepicker1()
var dateutlis = new DateUtlis()          //Creating Object so that we can use it
// var fileupload = new FileUpload()


Cypress.Commands.add('selectYear', (yearName) => {
    datePicker.getCalender().then(($calendar) => {
        if (!$calendar.is(':visible')) {
            datePicker.getdatepicker().click();
            cy.wait(1000);
        }
    });



    datePicker.getyearName().then(($year) => {
        const displayedYear = parseInt($year.text().trim());

        if (displayedYear === yearName) {
            cy.log(yearName + ' year is selected');
            return;
        }

        if (yearName < displayedYear) {
            datePicker.getNavigateBack().click();
        } else if (yearName > displayedYear) {
            datePicker.getNavigateForward().click();
        }

        cy.selectYear(yearName);
    });
});
Cypress.Commands.add('selectMonth', (monthName) => {

    let displayedMonth = new Date().getMonth() 
    let givenMonth = dateutlis.getMonthIndexFromName(monthName)

    datePicker.getMonth().then(($month) => {


        if ($month.text().includes(monthName)) {
            cy.log(monthName + 'month is selected')
            return
        }
        else {
            if (givenMonth < displayedMonth) {
                datePicker.getNavigateBack().click()
            } else if (givenMonth > displayedMonth) {
                datePicker.getNavigateForward().click()
            }
        }

        cy.selectMonth(monthName)


    })
});

Cypress.Commands.add('selectDate',function(date){

    datePicker.getDay().eq(date-1).click()
    cy.log(date + 'day is selected')
    cy.wait(5000)

})



