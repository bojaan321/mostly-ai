module.exports = {
    cookieSaveButton: '#CookieBoxSaveButton',
    platformLink: 'a[href="https://mostly.ai/synthetic-data-platform"].oxy-mega-dropdown_link',
    syntheticDataLink: 'a[href="https://mostly.ai/synthetic-data"].oxy-mega-dropdown_link',
    resourcesLink: 'a[href="https://mostly.ai/resources"].oxy-mega-dropdown_link',
    companyLink: 'a[href="https://mostly.ai/about-us"].oxy-mega-dropdown_link',
    pricingLink: 'a[href="https://mostly.ai/pricing"].oxy-mega-dropdown_link',
    headerSearchIcon: '#open-header-search-4002-16-icon',
    headerSearchField: '.oxy-header-search_search-field',
    headerSearchForm: '.oxy-header-search_form',
    noSearchResultsText: '#headline-274-1315',
    noSearchResultsWord: '#code_block-275-1315',
    contactLink: 'div#text_block-3984-16',
    homePageHeadline: '#headline-6177-3616',

    openPage(url){
        cy.visit(url);
        cy.get(this.cookieSaveButton).click({ force: true });
        cy.get(this.homePageHeadline).should($element => {
            const expectedText = 'Synthetic Data. Better than real.';
            const actualText = $element.text().replace(/\s+/g, ' ').trim();
            expect(actualText).to.equal(expectedText);
        });
    }
}
