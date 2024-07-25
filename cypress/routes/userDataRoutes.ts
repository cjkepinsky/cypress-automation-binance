export default class UserDataRoutes {
  static postUserPosition(alias = 'postUserPosition') {
    cy.intercept('POST', '**/bapi/futures/v6/private/future/user-data/user-position').as(alias)
  }
}