module.exports = {
    contactFormHeadline: '#headline-87-106',
    contactFormLoader: '.hs-loader',
    firstNameField: '#firstname-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    lastNameField: '#lastname-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    emailField: '#email-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    mobilePhoneField: '#mobilephone-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    companyField: '#company-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    countryDropdown: '#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    aboutMostlyField: '#how_did_you_hear_about_mostly_ai___free_text-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    messageField: '#message-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    consentCheckbox: '[id="LEGAL_CONSENT.subscription_type_5594858-27854f4c-b840-41f2-b7af-a3c9f512c9e8"]',
    submitButton: '.hs_submit.hs-submit',

    populateContactForm(customer) {
        cy.get(this.firstNameField).type(customer.firstName);
        cy.get(this.lastNameField).type(customer.lastName);
        cy.get(this.emailField).type(customer.businessMail);
        cy.get(this.mobilePhoneField).type(customer.phoneNumber);
        cy.get(this.companyField).type(customer.organizationName);
        cy.get(this.countryDropdown).select(customer.country);
        cy.get(this.aboutMostlyField).type(customer.aboutMostly);
        cy.get(this.messageField).type(customer.message);
    }
}
