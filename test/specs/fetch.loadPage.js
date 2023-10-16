const { expect } = require('@wdio/globals')
const FetchChallengePage = require('../pageobjects/fetch.challenge.page');

describe('Load fetch challenge page', () => {

    it('Load the fetch rewards challenge page', async () => {

        await browser.url('http://sdetchallenge.fetch.com/')
        await expect(FetchChallengePage.coin0).toBeClickable();
        await expect(FetchChallengePage.gridInput1).toBeClickable();
    })

})