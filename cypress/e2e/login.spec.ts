import LoginPage from 'pages/loginPage';
import config from "config/base.config";
import HomePage from "pages/homePage";

describe('Login Functionality', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it('should be able to buy BTCUSDT', () => {
    homePage
      .openPage()
      .isVisible()
      .orderForm
      .isLoginWithEmailBtnVisible()
      .clickLoginWithEmailBtn()

    loginPage
      .isVisible()
      .isEmailInputVisible()
      .isPasswordInputVisible()
      .isLoginBtnVisible()

      .typeEmailInput(config.credentials.username)
      .typePasswordInput(config.credentials.password)
      .clickLoginBtn()

    homePage.featuresDialog
      .isVisible()
      .clickLastFeature()
      .clickFooterBtn()
    homePage.bubbleMsg
      .clickConfirmBtn()
  });
});