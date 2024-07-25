import BasePage from 'pages/common/basePage';

export default abstract class BaseTab extends BasePage {
  protected abstract container: string
  protected abstract tabSel: string

  isTabVisible() {
    cy.get(this.tabSel)
      .should('be.visible')

    return this
  }

  clickTab() {
    cy.get(this.tabSel)
      .click()

    return this
  }
}