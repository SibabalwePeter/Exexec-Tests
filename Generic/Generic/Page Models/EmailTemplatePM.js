import { Selector } from 'testcafe';
export default class EmailTemplate{
    constructor(){
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btnEmailTemplates = Selector('#mCSB_4_container > div:nth-child(6)')
        this.btnEmailTemplatesSearch = Selector('#EmailTemplates')
        this.btnNewEmailTemplates = Selector('#NewButton')
        this.txtEmailTemplateName = Selector('[data-datafield=EmailTemplateName]')
        this.txtSubjectLine = Selector('[data-datafield=SubjectLine]')
        this.txtHtml = Selector('[data-datafield=EmailHtml]')
        this.btnSave = Selector('#SaveButton')
        this.lblTemplates = Selector('#dashboard-container > div.master-center.master-column > div > div.bread-crumb-container > ol > li:nth-child(2) > span')
        this.txtSearchTemplate = Selector('[data-datafield=LookupText]')
        this.template = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.selectable-table > table > tbody > tr:last-child > td:nth-child(1) > span')
    }
}
