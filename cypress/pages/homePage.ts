import BasePage from "pages/basePage";
import config from "config/base.config";
import OrderForm from "pages/homePage/orderForm";
import HotFeaturesDialog from "pages/homePage/hotFeaturesDialog";
import BubbleMsg from "pages/homePage/bubbleMsg";

export default class HomePage extends BasePage {
  protected container = 'div.react-grid-layout'
  public orderForm = new OrderForm()
  public featuresDialog = new HotFeaturesDialog()
  public bubbleMsg = new BubbleMsg()

  openPage(): this {
    super.openPage(config.baseUrl);

    return this
  }
}