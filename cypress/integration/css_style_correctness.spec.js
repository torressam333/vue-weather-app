describe('Verify correct css for home page', () => {
    it('Loads the home page', () => {
        //1. Arrange - setup initial app state
        cy.visit('http://localhost:8080/')
    });

    //Test for css correctness
    it('Checks proper css for page header', () => {
       cy.get('.the-header').should('have.css', 'align-items', 'center')
       cy.get('header')
           .should('have.css', 'background', 'rgba(0, 0, 0, 0) linear-gradient(173deg, rgb(255, 255, 255), rgb(52, 122, 176), rgb(104, 159, 201)) repeat scroll 0% 0% / auto padding-box border-box')
    });

    it('Checks proper css for the form', () => {
        cy.get('.weather-form').should('have.css', 'border', '3px solid rgb(52, 122, 176)')
    });
});