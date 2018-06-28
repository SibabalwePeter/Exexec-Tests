import SignIn from '../Log In/SignInPM';
import CreateNominations from './NominationPM';

fixture `Team Nomination`
    .page `https://testx.singularwebsites.co.za/xexec`;

    var team = {Name: "Test Team", personalMessage: "Test", Reason: "Test" };
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
            .click(nominatePage.icoSendSmile)
            .click(nominatePage.btnTeamChooseAward)
            .typeText(nominatePage.txtTeamName,  team.Name)
            
            .click(nominatePage.txtSearchMember)
            
            .typeText(nominatePage.txtSearchMember, member.name)
            
            //.click(page.rowItem.contains('Test'))
            .debug()
            //console.log(await nominatePage.TeamMember.count)
            .click(nominatePage.TeamMember)
            .click(nominatePage.btnNext)

            .click(nominatePage.coreBehavior)
            
            .click(nominatePage.dropWorkRelated)
            .click(nominatePage.dropWorkRelatedChioce)
            .typeText(nominatePage.txtReason, team.Reason)
            .click(nominatePage.btnNext)

            .typeText(nominatePage.personalMessage, team.personalMessage)
            .click(nominatePage.btnNext)
            .click(nominatePage.btnNext) 
            .wait(1000)
            .expect(nominatePage.confirmationMessage.innerText).contains('award is now on its way') 
            .click(nominatePage.btnNext) 
            .expect(nominatePage.recentAwards.innerText).contains(team.Name)
    });