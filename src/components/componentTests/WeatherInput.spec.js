import { mount } from '@cypress/vue';
import WeatherInput from '../WeatherInput';

describe('Weather Input Component', () => {
    it('Contains clean markup and named slots for reuse', () => {
        const title = 'Get weather by entering a location';
        mount(WeatherInput, {
            propsData: {
                title
            }
        });

        cy.get('h5').should('have.text', title)

        cy.get('[data-cy=weather-input-form]')
            .find('input')
            .type('Indio, CA').should('have.value', 'Indio, CA')
            .should('have.class', 'weather-search')
            .should('have.id', 'weather-search')
            .invoke('attr', 'placeholder').should('contain','Enter (city, state) or zip code...')

    })
})