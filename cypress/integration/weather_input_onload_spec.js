describe('Ensure Weather Input Properly Retrieves api data on page load', () => {
    it('Visits localhost url', () => {
        cy.visit('http://localhost:8080/')
    });

    it('Finds the proper title', () => {
        //Check for proper title
        cy.contains('Weather Forecast')
    });

    it('Finds form header', () => {
        cy.contains('Get weather by entering a location')
    });

    it('Gets users ip address information on page load', () => {
       cy.request('https://api64.ipify.org/?format=json')
    });

    it('Gets initial weather data on page load', () => {
        cy.request(Cypress.env('weather_stack_base_url') +
            "?key=" + Cypress.env('weather_stack_key') +
            "&postal_code=90210&units=I`").as('getWeatherData');

        cy.get('@getWeatherData').should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('0')
        });
    });
});