import SignIn from '../Log In/SignInPM';
import CreateNominations from './NominationPM';

fixture `Colleage Nomination`
    .page `https://testx.singularwebsites.co.za/xexec`;

    var nominee = {FullName: "Sibabalwe Peter", userName: 'speter@singulr.co.za', password: 'Passw0rd', awardType: "Siba Test card", date: Date.prototype};

    var User = function(typeOfUser){
        this.password = 'Passw0rd';
       
        if(typeOfUser == 'admin'){
            this.username = 'bwebber@singular.co.za';
        }
        else if(typeOfUser == 'normal'){ 
            this.username = 'speter@singulr.co.za';
        }
    }

    var nominee ={
        FullName: 'Test6 test',
        Reason: 'Test',
        PersonalMessage: 'Test'
    }


    const nominatePage = new CreateNominations();
    const SignInPage = new SignIn()
    const user = new User('normal')

 test('Colleage Nomination', async t => {
                    
    await t
        
        // Log in
        .click(SignInPage.btnSignIn)
        .typeText(SignInPage.txtUserName, user.username)
        .typeText(SignInPage.txtPassword, user.password)
        .click(SignInPage.btnLog)

        // Nominate someone 
        .click(nominatePage.icoSendSmile)
        .click(nominatePage.btnChooseAward)
        
        .typeText(nominatePage.txtSearch, nominee.FullName)
       
        .click(nominatePage.person)

        .click(nominatePage.coreBehavior)

        .click(nominatePage.dropWorkRelated)
        .click(nominatePage.dropWorkRelatedChioce)
        .typeText(nominatePage.txtReason, nominee.Reason)
        .click(nominatePage.btnNext)

        .typeText(nominatePage.personalMessage, nominee.PersonalMessage)
        .click(nominatePage.btnNext)
        .click(nominatePage.btnNext) 
        .wait(1000)
        .expect(nominatePage.confirmationMessage.innerText).contains('award is now on its way') 
        .click(nominatePage.btnNext) 
        .expect(nominatePage.recentAwards.innerText).contains(nominee.FullName) 
    }); 