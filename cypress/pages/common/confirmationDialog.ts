import BaseComponent from "pages/common/baseComponent";

export default class ConfirmationDialog extends BaseComponent {
  protected container = 'div.style-dialog-body'
  private readonly buttonSel = `${this.container} button`

  clickBtnWithLabel(label: string) {
    cy.contains(this.buttonSel, 'Confirm')
      // force: some tooltips appear randomly hiding the button
      .click({force: true})

    return this
  }
}