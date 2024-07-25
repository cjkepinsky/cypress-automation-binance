import BaseTab from "pages/common/baseTab";

export default class OrdersHistoryTab extends BaseTab {
  container = '[data-testid="orderHistoryTableInfo"]'
  tabSel = '[data-testid="OrderHistory"]'
  private readonly positionsContainerSel = `${this.container} [data-testid="DataTable"] > div:nth-of-type(3)`
  private readonly positionsFiltersSel = `${this.container} div.bn-tab__third`
  private readonly positionsSel = `${this.positionsContainerSel} > div:nth-of-type(2) > div.w-full`

  doesPositionContain(position: number, text: string) {
    cy.get(this.positionsSel).eq(position)
      .should('contain', text)

    return this
  }

  clickFilterBtnWith(label: string) {
    cy.get(`${this.positionsFiltersSel}:contains("${label}")`)

    return this
  }
}