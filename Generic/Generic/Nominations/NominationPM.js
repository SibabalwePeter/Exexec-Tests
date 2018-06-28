import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.icoSendSmile = Selector('#side-menu > div > div:nth-child(2) > span')
        this.btnChooseAward = Selector('#mCSB_3_container > div > div:nth-child(4)')
        this.txtSearch = Selector('[data-datafield=LookupText]');
        this.person = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(1)') 

        this.coreBehavior = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-award-details-container > div.col-container > div:nth-child(1) > div > div');
        
        this.txtReason = Selector('[data-datafield=RewardReason]');
        this.dropWorkRelated = Selector('[data-datafield=NominatorSelectedRewardOptionID]')
        this.dropWorkRelatedChioce = Selector('body > div.ComboDropDown.nominate-reward-option > div > div:nth-child(1)')
        
        //this.btnColleage = Selector("#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.dashboard-main-panel.nominate > div > div:nth-child(2) > div:nth-child(1) > div");
        this.personalMessage = Selector("[data-datafield=PersonalMessage]");
        this.confirmationMessage = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-confirmation-details-container > span');
        
        //this.btnHome = Selector('#NextButton')
        this.recentAwards = Selector('#mCSB_2_container > div:nth-child(1) > div.recent-award');               
        this.password = Selector('[data-datafield=Password]');
        this.sentSmile = Selector('#side-menu > div > div:nth-child(4) > span');
        
        //this.nomaneeNameOnProv = Selector('#mCSB_1_container > tr:nth-child(1) > td.name-column > div')
        this.award = Selector('#mCSB_1_container > tr:nth-child(6) > td.award-column > div > div')
        this.date = Selector('#mCSB_1_container > tr:nth-child(1) > td.date-column > span')
        this.btnSignIn = Selector('.btn-default')
        this.txtUserName = Selector('#username')
        this.btnLog = Selector('.landing-buttons .col-container .col1 .btn-primary')
        this.btnNext = Selector('#NextButton')
        this.afterSignIn = Selector('#dashboard-container > div.master-right.master-column') 
    }
}