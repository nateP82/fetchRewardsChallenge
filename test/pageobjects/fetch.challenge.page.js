const { $ } = require('@wdio/globals')

/**
 * Page object for custom fetch challenge page
 */
class FetchChallengePage {
    /**
     * Define selectors from the fetch challenge page
     */

    // Left grid input 1
    get gridInput1() {
        return $('#left_0');
    }
    // Left grid  input 2
    get gridInput2() {
        return $('#left_1');
    }

    get coin0() {
        return $('#coin_0');
    }

}

module.exports = new FetchChallengePage();