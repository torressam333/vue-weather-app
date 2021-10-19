describe('Ensure weather data is returned and displayed when form is submitted', () => {
    it('Visits home page', () => {
        //1. Arrange - setup initial app state
        cy.visit('http://localhost:8080/')
    });

    it('Finds the weather input form', () => {
        cy.get('.weather-form');
    });

    //Act - take an action
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

    //Assert - make an assertion about page content
});