import Page from './AwardSchemeRequiredApprovalPM';
import Approvals from './AwardSchemeRequiredApprovalPM';


fixture `Check admin Access`
    .page `https://singular.singularwebsites.co.za/xexec/Dashboard`;

var user = { userName: "acronwright@singular.co.za", password: "Passw0rd"};
const AwardSchemeApprovalRequired = new Approvals()
const AwardSchemeApprovalNotRequired = new Approvals()
var user = { userName: "bwebber@singular.co.za", password: "Passw0rd"};
var nomanee = {fullname: 'Brendon Bekker'}

test('Colleage Approval required', async t => {
    await t
        .click(AwardSchemeApprovalRequired.btnSignIn)
        .typeText(AwardSchemeApprovalRequired.txtUserName, user.userName)
        .typeText(AwardSchemeApprovalRequired.txtPassword, user.password)
        .click(AwardSchemeApprovalRequired.btnLog)

        .click(AwardSchemeApprovalRequired.btnApprovalRequired)
        .click(AwardSchemeApprovalRequired.btnColleage)
        .typeText(AwardSchemeApprovalRequired.txtSearch,nomanee.fullname)
        .click(AwardSchemeApprovalRequired.person)
        .click(AwardSchemeApprovalRequired.ChooseIntergrity)
        .typeText(AwardSchemeApprovalRequired.txtReason, 'Test')
        .typeText(AwardSchemeApprovalRequired.txtPersonalMessage, 'Test')
        .click(AwardSchemeApprovalRequired.btnNext)
        .click(AwardSchemeApprovalRequired.btnNext)
        .wait(1000)
        .expect(AwardSchemeApprovalRequired.lblCofirmantion.textContent).contains('sent for approval');
});

test('Colleage Approval Not required', async t => {
    await t
        .click(AwardSchemeApprovalNotrequired.btnSignIn)
        .typeText(AwardSchemeApprovalNotrequired.txtUserName, user.userName)
        .typeText(AwardSchemeApprovalNotrequired.txtPassword, user.password)
        .click(AwardSchemeApprovalRequired.btnLog)

        .click(AwardSchemeApprovalNotrequired.btnApprovalNotRequired)
        .click(AwardSchemeApprovalNotrequired.btnColleage)
        .typeText(AwardSchemeApprovalNotrequired.txtSearch,nomanee.fullname)
        .click(AwardSchemeApprovalNotrequired.person)
        .click(AwardSchemeApprovalNotrequired.ChooseIntergrity)
        .click(AwardSchemeApprovalNotrequired.dropWorkRekatedReward)
        .click(AwardSchemeApprovalNotrequired.dropWorkRekatedRewardChoices)
        .typeText(AwardSchemeApprovalNotrequired.txtReason, 'Test')
        .click(AwardSchemeApprovalNotrequired.btnNext)
        .typeText(AwardSchemeApprovalNotrequired.txtPersonalMessage, 'Test')
        .click(AwardSchemeApprovalNotrequired.btnNext)
        .click(AwardSchemeApprovalNotrequired.btnNext)
        .wait(1000)
        .expect(AwardSchemeApprovalNotrequired.lblCofirmantion.textContent).contains('award is now on its way to');
});

test('Team Approval Required', async t => {
    await t
    .click(AwardSchemeApprovalNotrequired.btnSignIn)
    .typeText(AwardSchemeApprovalNotrequired.txtUserName, user.userName)
    .typeText(AwardSchemeApprovalNotrequired.txtPassword, user.password)
    .click(AwardSchemeApprovalRequired.btnLog)

    .click(AwardSchemeApprovalNotrequired.btnApprovalRequired)
    .click(AwardSchemeApprovalNotrequired.btnTeam)
    .click(AwardSchemeApprovalRequired.dropWorkRelatedRewardforTeam)
    .click(AwardSchemeApprovalRequired.dropWorkRelatedRewardChoicesForTeam)
    .click(AwardSchemeApprovalRequired.btnNext)
    .click(AwardSchemeApprovalRequired.ChooseIntergrity)
    .typeText(AwardSchemeApprovalRequired.txtReason, 'Test')
    .typeText(AwardSchemeApprovalRequired.txtPersonalMessage, 'Test')
    .click(AwardSchemeApprovalRequired.btnNext)
    .click(AwardSchemeApprovalRequired.btnNext)
    .wait(1000)
    .expect(AwardSchemeApprovalNotrequired.lblCofirmantion.textContent).contains('sent for approval and you');
});

test('Team Approval Not Required', async t => {
    await t
    .click(AwardSchemeApprovalNotRequired.btnSignIn)
    .typeText(AwardSchemeApprovalNotRequired.txtUserName, user.userName)
    .typeText(AwardSchemeApprovalNotRequired.txtPassword, user.password)
    .click(AwardSchemeApprovalNotRequired.btnLog)

    .click(AwardSchemeApprovalNotRequired.btnApprovalNotRequired)
    .click(AwardSchemeApprovalNotRequired.btnTeam)
    .click(AwardSchemeApprovalNotRequired.dropWorkRelatedRewardforTeam)
    .click(AwardSchemeApprovalNotRequired.dropWorkRelatedRewardChoicesForTeam)
    .click(AwardSchemeApprovalNotRequired.btnNext)
    .click(AwardSchemeApprovalNotRequired.ChooseIntergrity)
    .typeText(AwardSchemeApprovalNotRequired.txtReason, 'Test')
    .click(AwardSchemeApprovalNotRequired.dropWorkRelatedTime)
    .click(AwardSchemeApprovalNotRequired.dropWorkRelatedTimeChoices)
    .click(AwardSchemeApprovalNotRequired.btnNext)
    .typeText(AwardSchemeApprovalNotRequired.txtPersonalMessage, 'Test')
    .click(AwardSchemeApprovalNotRequired.btnNext)
    .click(AwardSchemeApprovalNotRequired.btnNext)
    .wait(1000)
    .expect(AwardSchemeApprovalNotRequired.lblCofirmantion.textContent).contains('award is now on its way to Team')
}); 