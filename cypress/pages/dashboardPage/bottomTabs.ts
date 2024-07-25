import BasePage from 'pages/common/basePage';
import PositionsTab from 'pages/dashboardPage/bottomTabs/positionsTab';
import OrdersHistoryTab from 'pages/dashboardPage/bottomTabs/ordersHistoryTab';

export default class BottomTabs extends BasePage {
  protected container = ''
  public positionsTab = new PositionsTab()
  public ordersHistoryTab = new OrdersHistoryTab()
}