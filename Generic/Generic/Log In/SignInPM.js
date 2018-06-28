import { Selector } from 'testcafe';

export default class Required {
    constructor () {
        this.btnSignIn = Selector('.btn-default')
        this.txtUserName = Selector('#username')
        this.txtPassword = Selector("[data-datafield=Password]")
        this.btnLog = Selector('.landing-buttons .col-container .col1 .btn-primary')
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.icoReports = Selector('#side-menu > div > div:nth-child(8) > span')
    }
}