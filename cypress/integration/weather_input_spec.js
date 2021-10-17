describe('Ensure Weather Input Properly Retrieves api data', () => {
    it('Visits localhost url', () => {
        cy.visit('http://localhost:8080/')
    })

    it('Gets initial weather data on page load', () => {
        cy.request(Cypress.env('weather_stack_base_url') +
            "?key=" + Cypress.env('weather_stack_key') +
            "&postal_code=85326&units=I`").as('getWeatherData');

        cy.get('@getWeatherData').should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('0')
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