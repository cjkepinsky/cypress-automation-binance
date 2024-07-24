import BaseComponent from "pages/common/baseComponent";

export default class ConfirmationDialog extends BaseComponent {
  container = 'div.style-dialog-body'
  buttonSel = `${this.container} button`

  clickBtnWithLabel(label: string) {
    cy.contains(this.buttonSel, 'Confirm')
      // force: some tooltips appear randomly
      .click({force: true})

    return this
  }
}