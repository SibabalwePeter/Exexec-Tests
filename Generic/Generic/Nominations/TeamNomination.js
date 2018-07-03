import SignIn from '../Page Models/SignInPM';
import CreateNominations from '../Page Models/NominationPM';
import { Selector } from 'testcafe';

fixture `Team Nomination`
    .page `https://testx.singularwebsites.co.za/xexec`;

    var team = {Name: "Test Team4", personalMessage: "Test", Reason: "Test" };
    var member = {name: "Test"}

    var User = function(typeOfUser){
        this.password = 'Passw0rd';
       
        if(typeOfUser == 'admin'){
            this.username = 'bwebber@singular.co.za';
        }
        else if(typeOfUser == 'normal'){ 
            this.username = 'speter@singulr.co.za';
        }
    }

    const nominatePage = new CreateNominations();
    const SignInPage = new SignIn()
    const user = new User('normal')
    test('Nominate Team', async t => {
                    
        await t
            // Log in
            .maximizeWindow()
            .click(SignInPage.btnSignIn)
            .typeText(SignInPage.txtUserName, user.username)
            .typeText(SignInPage.txtPassword, user.password)
            .click(SignInPage.btnLog)
    
            // Create Team 
            .debug()
            .click(nominatePage.icoSendSmile)
            .click(nominatePage.btnTeamChooseAward)
            //.click(Selector('#NewTeamButton')) // temporary
            .typeText(nominatePage.txtTeamName,  team.Name)
            .click(nominatePage.txtSearchMember)
            .typeText(nominatePage.txtSearchMember, member.name)
            
            .pressKey('Enter')
            //.click(nominatePage.TeamMember)
            .click(nominatePage.Ok)
            .click(nominatePage.btnNext)

            .click(nominatePage.coreBehavior)
            
            .click(nominatePage.dropWorkRelated)
            .click(nominatePage.dropWorkRelatedChioce)
            .typeText(nominatePage.txtReason, team.Reason)
            .click(nominatePage.btnNext)
            //.click("[data-bind='visible: !(Hidden()), click: function(_obj, e) {AddEmployee($data)}']")

            .typeText(nominatePage.personalMessage, team.personalMessage)
            .click(nominatePage.btnNext)
            .click(nominatePage.btnNext) 
            
            .expect(nominatePage.confirmationMessage.innerText).contains('award is now on its way') 
            .click(nominatePage.btnNext) 
            .expect(nominatePage.recentAwards.innerText).contains(team.Name)

             // My award section
            .click(nominatePage.icoMyAward)
            .click(nominatePage.lblAwardDetails)
            .expect(nominatePage.lblNomineeTeam.innerText).contains(team.Name)
            .expect(nominatePage.lblCoreValue.innerText).contains('INTEGRITY') 
            .expect(nominatePage.lblReasonTeam.innerText).contains(team.Reason)
            
            // Spotlight section
            .click(nominatePage.icoSpotLight)
            .expect(nominatePage.lblTeamSpotLightName.innerText).contains('INTEGRITY')
            .expect(nominatePage.lblTeamNameInSpotLight.innerText).contains(team.Name)
        });