import { Selector } from 'testcafe';
export default class Client {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btnAwardScheme = Selector('#mCSB_4_container > div:nth-child(4)')
        this.btnNewAwardScheme = Selector('#NewButton')
        this.txtName = Selector('[data-datafield=AwardSchemeName]')
        this.txtDisplayOrder = Selector('[data-datafield="DisplayOrder"]')

        this.dropNominee = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.field-container > fieldset > div.scheme-settings > div > div:nth-child(3)')
        this.dropNomineeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')
        this.dropNomineeTeamChoice = Selector('body > div.ComboDropDown > div > div:nth-child(2)')

        this.dropAwardOptionCategory = Selector('[data-datafield=AwardCategoryID]')
        this.dropAwardOptionCategoryChoice = Selector('body > div.ComboDropDown > div > div:nth-child(4)')

        this.dropRewardtype = Selector('[data-datafield=RewardSchemeID]')
        this.dropRewardtypeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')

        this.cheActive = Selector('[data-datafield=Active]')

        this.btnAddeCard = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.field-container > table > tfoot > tr > td > button')
        this.dropeCardTemplate = Selector('[data-datafield=EcardTemplateID]')
        this.dropeCardTemplateChoice = Selector('body > div.ComboDropDown > div > div:nth-child(2)') // type tempplate name and click after
        this.cheDefaultNominee = Selector('[data-datafield=DefaultTemplate]')

        this.btnSave = Selector('#SaveButton')

        this.lblAwardSchemes = Selector('#dashboard-container > div.master-center.master-column > div > div.bread-crumb-container > ol > li:nth-child(1) > span')
        this.awardScheme = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.selectable-table > table > tbody > tr:nth-child(4) > td:nth-child(1) > span')
        this.TeamAwardScheme = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.selectable-table > table > tbody > tr:nth-child(5) > td:nth-child(1)')
    }   
}