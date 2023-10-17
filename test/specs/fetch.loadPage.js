const { expect } = require('@wdio/globals')
const FetchChallengePage = require('../pageobjects/fetch.challenge.page');


describe('Load fetch challenge page', () => {

    it('Load the fetch rewards challenge page', async () => {
        // Load the challenge page
        await browser.url('http://sdetchallenge.fetch.com/');
        await expect(FetchChallengePage.coin0).toBeClickable();

        // Verify that the grid exists and is clickable
        await expect(FetchChallengePage.gridInput1).toBeClickable();
        await FetchChallengePage.gridInput1.click();

        // Enter in the coins to weigh them
        await FetchChallengePage.enterEvenCoins(0,2,4,6,8);
        await FetchChallengePage.enterOddCoins(1,3,5,7);
        await FetchChallengePage.clickWeigh();
    })

})