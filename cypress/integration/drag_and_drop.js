/// <reference types="cypress"/>

// <-------- Drag and Drop Tests -------->

describe('Drag and Drop', () => {
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
            // const dataTransfer = new DataTransfer;
            // cy.get('#column-a').trigger('mousedown',{ which: 1, pageX: 600, pageY: 100 })
            // cy.get('#column-a').trigger('mousedown', {which:1})
            // cy.get('#column-a').trigger('mousedown')
            cy.get('#column-a').click().trigger('mousemove', { pageX: 600, pageY: 600 })
            // cy.get('#column-a').trigger('mousemove', { x:100, y:30 })
            cy.get('#column-a').should('have.class', 'column-over')
            // .trigger('dragstart',{dataTransfer});
            // cy.get('#column-b').trigger('dragend', {dataTransfer})
                
           })
        

})


