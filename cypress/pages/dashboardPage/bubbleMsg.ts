import BasePage from 'pages/common/basePage';

export default class BubbleMsg extends BasePage {
  protected container = 'div.bn-bubble-content'

  clickConfirmBtn() {
    cy.get(`${this.container} button`)
      .click()

    return this
  }
}