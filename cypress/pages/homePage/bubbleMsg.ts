import BasePage from "pages/basePage";

export default class BubbleMsg extends BasePage {
  container = 'div.bn-bubble-content'

  clickConfirmBtn() {
    cy.get(`${this.container} button`)
      .click()

    return this
  }
}