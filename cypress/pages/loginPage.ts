import BasePage from "pages/common/basePage";

export default class LoginPage extends BasePage {
  protected container = "div#login-form"
  private readonly emailInput = '#login_input_email';
  private readonly passwordInput = '#login_input_password';
  private readonly loginButton = '#login_input_login';

  isEmailInputVisible() {
    cy.get(this.emailInput)
      .should("be.visible")

    return this
  }

  isPasswordInputVisible() {
    cy.get(this.passwordInput)
      .should("be.visible")

    return this
  }

  isLoginBtnVisible() {
    cy.get(this.loginButton)
      .should("be.visible")

    return this
  }

  typeEmailInput(text: string) {
    cy.get(this.emailInput)
      .type(text)

    return this
  }

  typePasswordInput(text: string) {
    cy.get(this.passwordInput)
      .type(text)

    return this
  }

  clickLoginBtn() {
    cy.get(this.loginButton)
      .click()

    return this
  }
}