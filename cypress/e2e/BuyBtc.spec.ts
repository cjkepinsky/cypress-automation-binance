import LoginPage from 'pages/loginPage';
import config from 'config/base.config';
import DashboardPage from 'pages/dashboardPage';
import OrdersRoutes from 'routes/ordersRoutes';
import UserDataRoutes from 'routes/userDataRoutes';
import orderLabels from 'datasets/orderLabels.json'

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
      .isVisible()

      .isPositionsNumberEq(1)
      .doPositionsContain('0.010 BTC')

    dashboardPage.orderForm
      .typeUnitsInput('0.02')
      .clickBuyBtn()
      .waitForRoute('postPlaceOrder')
      .wait(3)

    dashboardPage.bottomTabs.positionsTab
      .isPositionsNumberEq(1)
      .doPositionsContain('0.030 BTC')

      .clickMarketCloseBtn()
    dashboardPage.bottomTabs.ordersHistoryTab
      .clickTab()
      .waitForRoute('postOrderHistory')
      .clickFilterBtnWith('1 Day')
      .wait(0.5)

      .doesPositionContain(0, orderLabels.btcusd)
      .doesPositionContain(0, orderLabels.market)
      .doesPositionContain(0, orderLabels.sell)
      .doesPositionContain(0, '0.030 BTC')

      .doesPositionContain(1, orderLabels.btcusd)
      .doesPositionContain(1, orderLabels.market)
      .doesPositionContain(1, orderLabels.buy)
      .doesPositionContain(1, '0.020 BTC')

      .doesPositionContain(2, orderLabels.btcusd)
      .doesPositionContain(2, orderLabels.market)
      .doesPositionContain(2, orderLabels.buy)
      .doesPositionContain(2, '0.010 BTC')
  });
});