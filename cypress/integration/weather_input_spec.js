describe('Ensure Weather Input Properly Receives api data', () => {
    it('Visits localhost url', () => {
        cy.visit('http://localhost:8080/')
    })

    it('Gets initial weather data on page load', () => {
        cy.server()
        cy.request(Cypress.env('weather_stack_base_url') +
            "/current?access_key=" + Cypress.env('weather_stack_key') +
            "&query=Phoenix").as('getWeatherData');

        cy.get('@getWeatherData').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('current')
            expect(response.body).to.have.property('location')
            expect(response.body).to.have.property('request')
        })
    })

    it('Finds the proper title', () => {
        //Check for proper title
        cy.contains('Weather Forecast')
    });

    it('Finds the form and tests the child elements', () => {
        //Ensure we items within weather input form
        cy.get('form').within(() => {
            //Clickable magnifying glass
            cy.get('.search-icon').click()

            //Actual input
            cy.get('.weather-search')
        })
    });
});