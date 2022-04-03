/// <reference types="cypress"/>


// <-------- Checkboxes Tests  -------->

// Please look under cypress folder > suppoort folder > 'commands.js' file to see customized functions - which can make a test sequence easy to read, as demonstrated below

describe('Checkbox tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/checkboxes"]').click();
    })

        it('Verify navigation to Checkbox Page', () => {
            cy.get('h3').should('have.text', 'Checkboxes');
             })


       it('Verify checkbox 1 is NOT selected by default', () => {
            cy.verifyCheckboxIsNOTselected(0)
            }) 

            
        it('Verify checkbox 2 IS selected by default', () => {
            cy.verifyCheckboxIsSelected(1)
            })


        it('Verify upon clicking checkbox 1, it is now selected', () => {
            cy.selectCheckbox(0)
            cy.verifyCheckboxIsSelected(0)
            })


        it('Verify upon clicking on selected checkbox 1, it is now DEselected', () => {
            cy.selectCheckbox(0)
            cy.selectCheckbox(0)
            cy.verifyCheckboxIsNOTselected(0)
            })   

})


