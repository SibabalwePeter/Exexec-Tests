import { Selector } from 'testcafe';

export default class Client {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.btnClients = Selector('#mCSB_4_container > div:nth-child(1)')
        this.btnNewClient = Selector('#NewButton')

        // Company details
        this.txtCompanyName = Selector('[data-datafield=CompanyName]')
        this.txtFinancialYear = Selector('[data-datafield=FinancialYearStartDate]')

        // Activation Details
        this.txtGoLivedate = Selector('[data-datafield=GoLiveDate]')

        // contact details
        this.txtContactName = Selector('[data-datafield=ContactName]')
        this.txtContactNumner = Selector('[data-datafield=ContactNumber]')
        this.txtContactEmail = Selector('[data-datafield=ContactEmail]')

        // Authentication
        this.dropUserLoginIdentifier = Selector('[data-datafield=UserIdentifier]')
        this.dropUserLoginIdentifierChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')
        this.dropUserregistrationType = Selector('[data-datafield=UserRegistrationType]')
        this.dropUserRegistrationTypeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')
        
        // plartform details
        this.dropClientLevel = Selector('[data-datafield=ClientLevelID]')
        this.dropCleintLevelChoice = Selector('body > div.ComboDropDown > div > div:nth-child(2)')
        this.dropClientBillType = Selector('[data-datafield=ClientBillingTypeID]')
        this.dropCleintBillTypeChoice = Selector('body > div.ComboDropDown > div > div:nth-child(1)')
        this.txtSubDomain = Selector('[data-datafield=Subdomain]')
        
        // Save
        this.btnSave = Selector('#SaveButton')
    }
}