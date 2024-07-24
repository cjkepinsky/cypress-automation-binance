import ConfirmationDialog from "pages/common/confirmationDialog";
import BaseComponent from "pages/common/baseComponent";

export default abstract class BasePage extends BaseComponent {
  protected container = ''
  public confirmDlg = new ConfirmationDialog()
}