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
    // Left grid input 3
    get gridInput3() {
        return $('#left_2');
    }
    // Left grid input 4
    get gridInput4() {
        return $('#left_3');
    }
    // Left grid input 5
    get gridInput5() {
        return $('#left_4');
    }

    // Right grid input 1
    get gridRightInput1() {
        return $('#right_0');
    }
    // Right grid input 2
    get gridRightInput2() {
        return $('#right_1');
    }
    // Right grid input 3
    get gridRightInput3() {
        return $('#right_2');
    }
    // Right grid input 4
    get gridRightInput4() {
        return $('#right_3');
    }
    // Right grid input 5
    get gridRightInput5() {
        return $('#right_4');
    }

    get coin0() {
        return $('#coin_0');
    }

    // weight button selector
    get weighButton() {
        return $("#weigh");
    }

    /**
     * function to enter even numbers into the left grid
     */
    async enterEvenCoins(gridInput1, gridInput2, gridInput3, gridInput4, gridInput5) {
        await this.gridInput1.click();
        await this.gridInput1.setValue(gridInput1);
        await this.gridInput2.click();
        await this.gridInput2.setValue(gridInput2);
        await this.gridInput3.click();
        await this.gridInput3.setValue(gridInput3);
        await this.gridInput4.click()
        await this.gridInput4.setValue(gridInput4);
        await this.gridInput5.click();
        await this.gridInput5.setValue(gridInput5);
    }

    /**
     * function to enter odd numbers into the right grid
     */
    async enterOddCoins(gridRightInput1, gridRightInput2, gridRightInput3, gridRightInput4) {
        await this.gridRightInput1.click();
        await this.gridRightInput1.setValue(gridRightInput1);
        await this.gridRightInput2.click();
        await this.gridRightInput2.setValue(gridRightInput2);
        await this.gridRightInput3.click();
        await this.gridRightInput3.setValue(gridRightInput3);
        await this.gridRightInput4.click();
        await this.gridRightInput4.setValue(gridRightInput4);
    }
    /**
     * function to click the Weigh button
     */
    async clickWeigh() {
        await this.weighButton.waitForClickable();
        await this.weighButton.click();
    }

}

module.exports = new FetchChallengePage();