export default class OrdersRoutes {
  private static readonly routeBaseUriV1 = '**/bapi/futures/v1/private/future/order'
  private static readonly routeBaseUriV2 = '**/bapi/futures/v2/private/future/order'

  static postPlaceOrder(alias = 'postPlaceOrder') {
    cy.intercept('POST', `${this.routeBaseUriV1}/place-order`).as(alias)
  }

  static postClearPosition(alias = 'postClearPosition') {
    cy.intercept('POST', `${this.routeBaseUriV2}/clear-position`).as(alias)
  }

  static postOrderHistory(alias = 'postOrderHistory') {
    cy.intercept('POST', `${this.routeBaseUriV1}/order-history`).as(alias)
  }

}