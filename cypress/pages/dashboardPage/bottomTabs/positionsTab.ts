import BaseTab from 'pages/common/baseTab';
import dialogLabels from 'datasets/dialogLabels.json'

export default class PositionsTab extends BaseTab {
  protected container = '[data-testid="positionTableInfo"]'
  protected tabSel = '[data-testid="Positions"]'
  private readonly closeAllPositionsBtn = `${this.container} div.closePosition button`
  private readonly positionsContainerSel = `${this.container} div.list-item-container`
  private readonly positionsSel = `${this.positionsContainerSel} > div.items-center`
  private readonly positionsContentSel = `${this.positionsContainerSel} div.items-center`
  private readonly positionMarketCloseBtn = `${this.positionsContainerSel} div.items-center button:contains("Market")`

  isPositionsNumberEq(positions: number) {
    cy.get(this.positionsSel).its('length')
      .should('eq', positions)

    return this
  }

  doPositionsContain(text: string) {
    cy.get(this.positionsContentSel)
      .should('contain', text)

    return this
  }

  clickMarketCloseBtn() {
    cy.get(this.positionMarketCloseBtn)
      .click()

    return this
  }

  clickCloseAllPositionsBtnIfClickable() {
    cy.then(() => {
      const $btn = Cypress.$(this.closeAllPositionsBtn)

      if ($btn.length > 0) {
        if ($btn.is(':visible') && !$btn.is(':disabled')) {
          this.clickCloseAllPositionsBtn()
          this.confirmDlg.clickBtnWithLabel(dialogLabels.confirmBtn)
          this.waitForRoute('postClearPosition')
        }
      }
    })

    return this
  }

  clickCloseAllPositionsBtn() {
    cy.get(this.closeAllPositionsBtn)
      .click()

    return this
  }
}