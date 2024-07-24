import BasePage from "pages/common/basePage";

export default class OrderForm extends BasePage {
  protected container = 'div[name="orderForm"]'
  private readonly loginWithEmailBtn: string = 'button[data-testid="orderform_login"]'
  private readonly buyBtn: string = 'button.bn-button__buy'
  private readonly marketTab: string = '[id="tab-MARKET"]'
  private readonly unitsInput: string = '[name="unitAmount"]'


  isLoginWithEmailBtnVisible() {
    cy.get(this.loginWithEmailBtn)
      .should("be.visible")

    return this
  }

  clickLoginWithEmailBtn() {
    cy.get(this.loginWithEmailBtn)
      .click()

    return this
  }

  isBuyBtnVisible() {
    cy.get(this.buyBtn)
      .should("be.visible")

    return this
  }

  clickBuyBtn() {
    cy.get(this.buyBtn)
      .click()

    return this
  }

  isMarketTabVisible() {
    cy.get(this.marketTab)
      .should("be.visible")

    return this
  }

  clickMarketTab() {
    cy.get(this.marketTab)
      .click()

    return this
  }

  isUnitsInputVisible() {
    cy.get(this.unitsInput)
      .should("be.visible")

    return this
  }

  clickUnitsInput() {
    cy.get(this.unitsInput)
      .click()

    return this
  }

  typeUnitsInput(text: string) {
    cy.get(this.unitsInput)
      .type(text)

    return this
  }

}