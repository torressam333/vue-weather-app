import { mount } from '@cypress/vue';
import BaseCard from './BaseCard';

describe('BaseCard Component', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config().baseUrl)
    })

    it('Contains clean markup and named slots for reuse', () => {
        cy.get('[data-cy=base-card-div]')
            .children().should('have.html', '<header>')
            .children().should('have.html', '<main>')
            .children().should('have.html', '<footer>')
    })
})