import { Selector } from 'testcafe';

export default class eCard {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btneCard = Selector('#mCSB_4_container > div:nth-child(5)')
        this.btnNeweCard = Selector('#NewButton')

        this.txtTemplatename = Selector('[data-datafield=EcardTemplateName]')
        this.txtSubject = Selector('[data-datafield=EcardSubjectLine]')
        this.txtHtml = Selector('[data-datafield=EcardTemplateHtml]')
        this.icoImage = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.field-container.col-container.ecard-template-editor > img')
        //#dashboard-container > div.master-center.master-column > div > div.admin-content.field-container.col-container.ecard-template-editor > img
        this.btnSave = Selector('#SaveButton')
    }
}