import BasePage from "pages/basePage";

export default class OrderForm extends BasePage {
  protected container = 'div[name="orderForm"]'
  private readonly loginWithEmailBtn: string = 'button[data-testid="orderform_login"]'

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

}