import CreatAwardScheme from './AwardPM';
import SignIn from '../Log In/SignInPM';

fixture `Award Scheme`
    .page `https://testx.singularwebsites.co.za/xexec/Dashboard`;

var User = function(typeOfUser){
    this.password = 'Passw0rd';
   
    if(typeOfUser == 'admin'){
        this.username = 'bwebber@singular.co.za';
    }
    else if(typeOfUser == 'normal'){ 
        this.username = 'bwebber@singular.co.za';
    }
}

var awardScheme = {
    name: 'Team Test',
    displayOrder: '5',
    ecardLinked: 'Test'
}

const singInPage = new SignIn()

test('Create Award Scehme', async t => {

    const  user = new User('admin');
    const awardSchemePage = new CreatAwardScheme()

    await t

        // Log In
        .maximizeWindow()
        .click(singInPage.btnSignIn)
        .typeText(singInPage.txtUserName, user.username)
        .typeText(singInPage.txtPassword, user.password)
        .click(singInPage.btnLog)

        // Navigate
        .click(awardSchemePage.icoAdmin)
        .click(awardSchemePage.btnAwardScheme)
        .click(awardSchemePage.btnNewAwardScheme)

        // Fill in 
        .typeText(awardSchemePage.txtName, awardScheme.name)
        .typeText(awardSchemePage.txtDisplayOrder, awardScheme.displayOrder)
        .click(awardSchemePage.dropNominee)
        .click(awardSchemePage.dropNomineeTeamChoice)

        .click(awardSchemePage.dropAwardOptionCategory)
        .click(awardSchemePage.dropAwardOptionCategoryChoice)
        .click(awardSchemePage.dropRewardtype)
        .click(awardSchemePage.dropRewardtypeChoice)
        .click(awardSchemePage.cheActive)

        // add eCard
        .debug()
        .click(awardSchemePage.btnAddeCard)
        .click(awardSchemePage.dropeCardTemplate)
        .typeText(awardSchemePage.dropeCardTemplate, awardScheme.ecardLinked)
        .click(awardSchemePage.dropeCardTemplateChoice)
        .click(awardSchemePage.cheDefaultNominee)

        // save #MsgControlEditPageMessages

        .click(awardSchemePage.btnSave)

        .click(awardSchemePage.lblAwardSchemes)
        .expect(awardSchemePage.TeamAwardScheme.textContent).contains(awardScheme.name)
        
        .wait(10000)
});