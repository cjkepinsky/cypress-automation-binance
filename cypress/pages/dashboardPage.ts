import BasePage from 'pages/common/basePage';
import config from 'config/base.config';
import OrderForm from 'pages/dashboardPage/orderForm';
import HotFeaturesDialog from 'pages/dashboardPage/hotFeaturesDialog';
import BubbleMsg from 'pages/dashboardPage/bubbleMsg';
import BottomTabs from 'pages/dashboardPage/bottomTabs';

export default class DashboardPage extends BasePage {
  public orderForm = new OrderForm()
  public featuresDialog = new HotFeaturesDialog()
  public bubbleMsg = new BubbleMsg()
  public bottomTabs = new BottomTabs()
  protected container = 'div.react-grid-layout'

  openPage(): this {
    super.openPage(config.baseUrl);

    return this
  }

  isVisible() {
    // added long wait for manual Captcha resolution
    cy.get(this.container, {timeout: 120000}).should('be.visible');

    return this;
  }
}