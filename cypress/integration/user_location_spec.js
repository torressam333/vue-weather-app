describe('Return users ip address via api call', () => {
    it('Makes a request to ipify api', () => {
        cy.request('https://api64.ipify.org?format=json').as('usersIP');

        cy.get('@usersIP').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('ip')
            assert.isString(response.body.ip)
        });
    });
});

describe('Return a zip code using ip address via api call', () => {
    it('Makes a request to ipify api', () => {
        cy.request(Cypress.env('ip_stack_url') +
            "2600:8800:86ac:6400:12e7:c6ff:fe16:8c6e?access_key=" + Cypress.env('ip_stack_key'))
            .as('getIpLocationData');

        cy.get('@getIpLocationData').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('zip')
            assert.isString(response.body.zip)
            assert.isObject(response.body)
        });
    });
});