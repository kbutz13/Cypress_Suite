/// <reference types="cypress"/>

// <-------- Drag and Drop Tests -------->

describe('Drag and Drop tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/drag_and_drop"]').click();
    })

        it('Verify navigation to Drag and Drop Page', () => {
            cy.get('h3').should('have.text', 'Drag and Drop');
             })

        it('Verify Default position - Box A is in column a', () => {
            cy.get('#column-a').should('have.text', 'A')
        
            })

        it('Verify Default position - Box B is in column b', () => {
            cy.get('#column-b').should('have.text', 'B')
            
            })
    
        it('Drag A to B, verify boxes end position is switched', () => {
            const dataTransfer = new DataTransfer;
     
            cy.get('#column-a').first().trigger('dragstart', { dataTransfer });
            cy.get('#column-b').first().trigger('drop', { dataTransfer })
            
            cy.get('#column-b').children('header').should('have.text', 'A')
            cy.get('#column-a').children('header').should('have.text', 'B')
            })


})