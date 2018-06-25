import { Selector } from 'testcafe';

export default class Required {
    constructor () {
        //////////// required //////////////
        this.btnSignIn = Selector('.btn-default')
        this.txtUserName = Selector('#username')
        this.txtPassword = Selector("[data-datafield=Password]");
        this.btnLog = Selector('.landing-buttons .col-container .col1 .btn-primary')

        this.btnApprovalRequired = Selector('#mCSB_3_container > div > div:nth-child(1)')
        this.btnApprovalNotRequired = Selector('#mCSB_3_container > div > div:nth-child(2) > div')
        this.btnColleage = Selector('#mCSB_3_container > div:nth-child(2) > div:nth-child(1)')
        this.txtSearch = Selector('[data-datafield=LookupText]')
        this.person = Selector('#mCSB_8_container > table > tbody > tr:nth-child(1) > td:nth-child(1)')
        this.ChooseIntergrity = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-award-details-container > div.col-container > div:nth-child(1) > div > div > div.nominate-tile-icon.image > img')
        this.txtReason = Selector('[data-datafield=RewardReason]')
        this.txtPersonalMessage = Selector('[data-datafield=PersonalMessage]')
        this.btnNext = Selector('#NextButton') //#NextButton > span:nth-child(1) assumes next is the same 
        this.lblCofirmantion = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-confirmation-details-container > span')

        this.popMustEmployee = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
        this.ok = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
    
        /////////// Not required ////////////////
        this.btnSignIn = Selector('.btn-default')
        this.txtUserName = Selector('#username')
        this.txtPassword = Selector("[data-datafield=Password]");
        this.btnLog = Selector('.landing-buttons .col-container .col1 .btn-primary')

        this.btnApprovalNotRequired = Selector('#mCSB_3_container > div > div:nth-child(2) > div')
        this.btnColleage = Selector('#mCSB_3_container > div:nth-child(2) > div:nth-child(1)')
        this.txtSearch = Selector('[data-datafield=LookupText]')
        this.person = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(1)') 
        this.ChooseIntergrity = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-award-details-container > div.col-container > div:nth-child(1) > div > div > div.nominate-tile-icon.image > img')
    
        this.dropWorkRekatedReward = Selector('[data-datafield=NominatorSelectedRewardOptionID]')
        this.dropWorkRekatedRewardChoices = Selector('body > div.ComboDropDown.nominate-reward-option > div > div:nth-child(1)')
        this.txtReason = Selector('[data-datafield=RewardReason]')
        this.txtPersonalMessage = Selector('[data-datafield=PersonalMessage]')
        this.btnNext = Selector('#NextButton') //#NextButton > span:nth-child(1) assumes next is the same 
        this.lblCofirmantion = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-confirmation-details-container > span')

        this.popMustEmployee = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
        this.ok = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
    
        //////////// Team Approval required
        this.btnTeam = Selector('#mCSB_3_container > div:nth-child(2) > div:nth-child(2) > div')
        this.dropWorkRelatedRewardforTeam = Selector('[data-datafield=NomineeTeamID]')
        this.dropWorkRelatedRewardChoicesForTeam = Selector('body > div.ComboDropDown > table > tbody > tr > td:nth-child(2)') 

        this.dropWorkRelatedTime = Selector('[data-datafield=NominatorSelectedRewardOptionID]')
        this.dropWorkRelatedTimeChoices = Selector('body > div.ComboDropDown.nominate-reward-option > div > div:nth-child(2)')
    }
}

