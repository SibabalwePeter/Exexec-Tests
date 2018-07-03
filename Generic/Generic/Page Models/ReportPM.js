import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.icoReports = Selector('#side-menu > div > div:nth-child(8) > span')
        this.dropReport = Selector('[data-datafield=SelectedReportID]')
        this.dropReportChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')
    }
}