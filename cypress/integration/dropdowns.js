/// <reference types="cypress"/>

// <-------- Drag and Drop Tests -------->

describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/dropdown"]').click();
    })

        it('Verify navigation to Dropdown Page', () => {
            cy.get('h3').should('have.text', 'Dropdown List');
             })

        // it('Verify Default position - Box A is in column a', () => {
        //     cy.get('#column-a').should('have.text', 'A')
        
        //     })

        // it('Verify Default position - Box B is in column b', () => {
        //     cy.get('#column-b').should('have.text', 'B')
            
            // })
    
        

})


