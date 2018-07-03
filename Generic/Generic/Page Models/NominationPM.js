import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.icoAdmin = Selector('#side-menu > div > div:nth-child(7) > span')
        this.icoSendSmile = Selector('#side-menu > div > div:nth-child(2) > span')
        this.btnChooseAward = Selector('#mCSB_3_container > div > div:nth-child(4)')
        this.btnTeamChooseAward = Selector('#mCSB_3_container > div > div:nth-child(5)')
        this.txtSearch = Selector('[data-datafield=LookupText]');
        this.person = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(1)') 

        this.coreBehavior = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-award-details-container > div.col-container > div:nth-child(1) > div > div');
        
        this.txtReason = Selector('[data-datafield=RewardReason]');
        this.dropWorkRelated = Selector('[data-datafield=NominatorSelectedRewardOptionID]')
        this.dropWorkRelatedChioce = Selector('body > div.ComboDropDown.nominate-reward-option > div > div:nth-child(1)')
        
        //this.btnColleage = Selector("#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.dashboard-main-panel.nominate > div > div:nth-child(2) > div:nth-child(1) > div");
        this.personalMessage = Selector('[data-datafield=PersonalMessage]');
        //this.teamPersonalMessage = Selector('[data-datafield="PersonalMessage]')
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
    
        // Team Creation
        this.txtTeamName = Selector('[data-datafield=TeamName]') //data-datafield=LookupText
        this.txtSearchTeamMember = Selector('[data-datafield=LookupText]')
        this.txtSearchMember = Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-team-container > div:nth-child(2) > div:nth-child(3) > div > div.employee-lookup-criteria > div')
        this.TeamMember = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(2) > div')
        this.Ok = Selector('body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button > span')
        
        // My award sections
        this.icoMyAward = Selector('#side-menu > div > div:nth-child(5) > span')
        this.lblAwardDetails = Selector('#mCSB_3_container > tr:nth-child(1) > td.award-column > div > div')
        this.lblNominee = Selector('#simple-dialog > div > div.dialog-grey-band > div:nth-child(3) > div')
        this.lblValue = Selector('#simple-dialog > div > div.award-info > div.award-option > div.award-information-field.type2 > span:nth-child(2)')
        this.lblPersonalMessage = Selector('#simple-dialog > div > div.award-info > div:nth-child(2) > span:nth-child(2)')
        
        // Team Spot light
        this.icoSpotLight = Selector('#side-menu > div > div:nth-child(3) > span')
        this.lblTeamNameInSpotLight = Selector('[class= " "]')
        this.lblTeamSpotLightName = Selector('#dashboard-container > div.master-center.master-column > div.award-container.col-container.size-to-side-panels > div:nth-child(1) > div > div.spotlightpanel-content-awardoption')
        
        // For team
        this.lblNomineeTeam = Selector('#simple-dialog > div > div.dialog-grey-band > div:nth-child(3) > div')
        this.lblCoreValue = Selector('#simple-dialog > div > div.award-info > div.award-option > div.award-information-field.type2 > span:nth-child(2)')
        this.lblPersonalMessageTeam = Selector('#simple-dialog > div > div.award-info > div:nth-child(2) > span:nth-child(2)')
        this.lblReasonTeam = Selector('#simple-dialog > div > div.award-info > div:nth-child(3) > span:nth-child(2)')
        
        this.lblColleageSpotlightName = Selector('#dashboard-container > div.master-center.master-column > div.award-container.col-container.size-to-side-panels > div:nth-child(1) > div > div.spotlightpanel-content-awardoption')
    }
}