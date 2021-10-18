describe('Ensure weather data is returned and displayed when form is submitted', () => {
    it('Visits localhost url', () => {
        cy.visit('http://localhost:8080/')
    });

    it('Finds the form', () => {
        //Ensure we items within weather input form
        cy.get('.weather-form');
    });

    it('Finds the form and calls weather api on submit', () => {
        //Ensure we items within weather input form
        cy.get('.weather-form').within(() => {
            //Actual input
            cy.get('.weather-search')
                //Provide input before submit button is clicked
                .type('Phoenix, AZ')
                .get('.search-icon').click()
        })
    });
});