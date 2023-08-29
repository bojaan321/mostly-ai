import homePage from '../../objects/home_page.obj';

describe('Bookmarks verification', () => {
    before(() => {
        homePage.openPage('');
    });
    it('Verifying if Bookmarks are being visible', () => {
        cy.get(homePage.platformLink).should('be.visible').should('have.text', 'Platform');
        cy.get(homePage.syntheticDataLink).should('be.visible').should('have.text', 'Synthetic Data');
        cy.get(homePage.resourcesLink).should('be.visible').should('have.text', 'Resources');
        cy.get(homePage.companyLink).should('be.visible').should('have.text', 'Company');
        cy.get(homePage.pricingLink).should('be.visible').should('have.text', 'Pricing');
    });
});