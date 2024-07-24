import LoginPage from 'pages/loginPage';
import config from "config/base.config";
import DashboardPage from "pages/dashboardPage";
import OrdersRoutes from "routes/ordersRoutes";
import UserDataRoutes from "routes/userDataRoutes";

describe('Login And Buy', () => {
  const dashboardPage = new DashboardPage();
  const loginPage = new LoginPage();


  beforeEach(() => {
    UserDataRoutes.postUserPosition()
    OrdersRoutes.postClearPosition()

    dashboardPage
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

    dashboardPage.featuresDialog
      .isVisible()
      .wait(1)
      .clickLastFeature()
      .clickFooterBtn()
    dashboardPage.bubbleMsg
      .isVisible()
      .clickConfirmBtn()

    dashboardPage.bottomTabs.positionsTab.clickTab()
    dashboardPage.bottomTabs.positionsTab
      .waitForRoute('postUserPosition')
      .clickCloseAllPositionsBtnIfClickable()
  })

  it('should be able to buy BTCUSDT twice and show merged positions', () => {
    OrdersRoutes.postOrderHistory()
    OrdersRoutes.postPlaceOrder()
    UserDataRoutes.postUserPosition()

    dashboardPage.orderForm
      .isMarketTabVisible()
      .clickMarketTab()
      .isUnitsInputVisible()
      .typeUnitsInput('0.01')
      .isBuyBtnVisible()
      .clickBuyBtn()
      .waitForRoute('postPlaceOrder')
    dashboardPage.bottomTabs.positionsTab
      .isTabVisible()
      .clickTab()
      // .waitForRoute('postUserPosition')
      .wait(4)

      .isPositionsNumberEq(1)
      .doPositionsContain('0.010 BTC')
      // .doesPositionContain(0, 'BTCUSDT')

    dashboardPage.orderForm
      .typeUnitsInput('0.02')
      .clickBuyBtn()
      .waitForRoute('postPlaceOrder')

    dashboardPage.bottomTabs.positionsTab
      // .waitForRoute('postUserPosition')
      .wait(4)
      .isPositionsNumberEq(1)
      .doPositionsContain('0.030 BTC')

      .clickMarketCloseBtn()
    dashboardPage.bottomTabs.ordersHistoryTab
      .clickTab()
      .waitForRoute('postOrderHistory')
      .wait(2)

      .doesPositionContain(0, 'BTCUSDT')
      .doesPositionContain(0, 'Market')
      .doesPositionContain(0, 'Sell')
      .doesPositionContain(0, '0.030 BTC')
      .doesPositionContain(1, 'BTCUSDT')
      .doesPositionContain(1, 'Market')
      .doesPositionContain(1, 'Buy')
      .doesPositionContain(1, '0.020 BTC')
      .doesPositionContain(2, 'BTCUSDT')
      .doesPositionContain(2, 'Market')
      .doesPositionContain(2, 'Buy')
      .doesPositionContain(2, '0.010 BTC')

  });
});