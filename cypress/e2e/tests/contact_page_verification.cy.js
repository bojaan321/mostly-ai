import homePage from '../../objects/home_page.obj';
import contactPage from '../../objects/contact_page.obj';

const customer = require('../../fixtures/customer.json');
describe('Contact Page verification', () => {
    before(() => {
        homePage.openPage('');
    });
    it('Verifying elements of Contact page', () => {
        cy.get(homePage.companyLink).trigger('mouseover');
        cy.get(homePage.contactLink).click({ force: true });
        cy.get(contactPage.contactFormHeadline).should('be.visible').click();
        cy.get(contactPage.contactFormLoader).should('not.be.visible');
        contactPage.populateContactForm(customer);
        cy.get(contactPage.consentCheckbox).check();
        cy.get(contactPage.submitButton).trigger('mouseover');
    });
});