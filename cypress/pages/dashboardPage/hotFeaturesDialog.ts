import BasePage from "pages/common/basePage";

export default class HotFeaturesDialog extends BasePage {
  protected container = 'div.style-dialog-body'
  private readonly footerBtn: string = 'div.modal-footer button'
  private readonly lastFeatureAcc: string = '[data-index="4"] > .step-title'

  clickLastFeature() {
    cy.get(this.lastFeatureAcc)
      // TODO doesn't work the conventional way, scrolling also doesn't help, try different solution.
      .click({force: true})

    return this
  }

  clickFooterBtn() {
    cy.get(this.footerBtn)
      .click()

    return this
  }
}