import { Selector } from 'testcafe';
export default class Client {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btnStaffData = Selector('#mCSB_4_container > div:nth-child(2)')

        // fill In
        this.btnNewProfile = Selector('#dashboard-container > div.master-center.master-column > div.staff-data > div:nth-child(4) > button')
        this.txtEmployeeCode = Selector('[data-datafield=EmployeeCode]')
        this.txtWorkEmail = Selector('[data-datafield=WorkEmail]')
        this.txtFirstName = Selector('[data-datafield=FirstName]')
        this.txtSurname = Selector('[data-datafield=Surname]')
        
        // prof
        this.btnSave = Selector('#SaveButton')
        this.lblStaffData = Selector('#dashboard-container > div.master-center.master-column > div > div.bread-crumb-container > ol > li:nth-child(2) > span')
        this.btnFind = Selector('#dashboard-container > div.master-center.master-column > div.staff-data > div:nth-child(3) > button')
        this.txtSearch = Selector('[data-datafield=LookupText]')
        this.NewProfile = Selector('#mCSB_6_container > table > tbody > tr:nth-child(1) > td:nth-child(3) > span')
    }
}

