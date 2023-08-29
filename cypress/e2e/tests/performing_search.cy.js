import homePage from '../../objects/home_page.obj';

const misspelledWord = 'sythetic';
describe('Search verification', () => {
    before(() => {
        homePage.openPage('');
    });
    it('Verifying if search functionality is working properly', () => {
        cy.get(homePage.headerSearchIcon).click();
        cy.get(homePage.headerSearchField).type(misspelledWord);
        cy.get(homePage.headerSearchForm).submit();
        cy.get(homePage.noSearchResultsText).should('have.text','Sorry, no results for:');
        cy.get(homePage.noSearchResultsWord).should('have.text', misspelledWord);
    });
});