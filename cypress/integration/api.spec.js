// api.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import StocksAPI from '../../frontend/src/API/stocks_api';
import keys from '../../frontend/src/keys';

describe("My First Test", () => {
  it("Does not do much!", () => {
    let data;
    const tickerName = 'aapl';
    const url = `https://finnhub.io/api/v1/search?q=${tickerName}&token=${keys.finnhub_key}`;

    cy.server();
    cy.log(url);
    cy.intercept({
      method: "GET",
      url,
    }).as('ticker')

    cy.request(url).then(res => cy.log(JSON.stringify(res)))
    
    expect(true).to.equal(true);
  });
});