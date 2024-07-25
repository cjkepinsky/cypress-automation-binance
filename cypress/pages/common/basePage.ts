import ConfirmationDialog from "pages/common/confirmationDialog";
import BaseComponent from "pages/common/baseComponent";

export default abstract class BasePage extends BaseComponent {
  public confirmDlg = new ConfirmationDialog()
  protected container = ''
}