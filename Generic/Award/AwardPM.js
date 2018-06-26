import { Selector } from 'testcafe';
export default class Client {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btnAwardScheme = Selector('#mCSB_4_container > div:nth-child(4)')
        this.btnNewAwardScheme = Selector('#NewButton')
        this.txtName = Selector('[data-datafield=AwardSchemeName]')

        this.dropNominee = Selector('[data-datafield=AwardNomineeTypeID]')
        this.dropNomineeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')

        this.dropAwardOptionCategory = Selector('[data-datafield=AwardCategoryID]')
        this.dropAwardOptionCategoryChoice = Selector('body > div.ComboDropDown > div > div:nth-child(4)')

        this.dropRewardtype = Selector('[data-datafield=RewardSchemeID]')
        this.dropRewardtypeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')

        this.cheActive = Selector('[data-datafield=Active]')

        this.btnAddeCard = Selector('#dashboard-container > div.master-center.master-column > div > div.admin-content.field-container > table > tfoot > tr > td > button')
        this.dropeCardTemplate = Selector('[data-datafield=EcardTemplateID]')
        this.dropeCardTemplateChoice = Selector('body > div.ComboDropDown > div > div:nth-child(2)') // type tempplate name and click after

        this.btnSave = Selector('#SaveButton')
    }
}

