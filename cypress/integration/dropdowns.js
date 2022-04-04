/// <reference types="cypress"/>

// <-------- Dropdown Tests -------->

describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/dropdown"]').click();
    })

        it('Verify navigation to Dropdown Page', () => {
            cy.get('h3').should('have.text', 'Dropdown List');
             })

        it('Verify option 1 in dropdown when selected', () => {
            cy.get('select').select('Option 1').should('have.value', '1')
            cy.get('select').children('option[selected="selected"]').contains('Option 1')
            })

        it('Verify option 2 in dropdown when selected', () => {
            cy.get('select').select('Option 2').should('have.value', '2')
            cy.get('select').children('option[selected="selected"]').contains('Option 2')
            })   

})


