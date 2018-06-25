import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.btnSignIn = Selector('.btn-default');
        this.txtUserName = Selector('#username');
        this.txtPassword = Selector("[data-datafield=Password]");
        this.btnLog = Selector('.landing-buttons .col-container .col1 .btn-primary');

        this.icoReceived = Selector('#side-menu > div > div:nth-child(3) > span');
        this.icoSent = Selector('#side-menu > div > div:nth-child(4) > div > img');
        this.icoSend = Selector('#dashboard-container > div.master-center.master-column > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > img')
        this.popMustEmployee = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
        //<span id="ui-id-3" class="ui-dialog-title">Must be an employee</span>
        this.btnOk = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
    }
}