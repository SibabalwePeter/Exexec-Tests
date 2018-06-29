import SignIn from './SignInPM';
import { Selector } from 'testcafe';

fixture `Check admin Access`
    //.page `https://singular.singularwebsites.co.za/xexec/Dashboard`; // Singular HealthShield
    .page `https://testx.singularwebsites.co.za/xexec`; // Testx HealthShieled

var User = function(typeOfUser){
    this.password = 'Passw0rd';
   
    if(typeOfUser == 'admin'){
        this.username = 'bwebber@singular.co.za';
    }
    else if(typeOfUser == 'normal'){ 
        this.username = 'speter@singulr.co.za';
    }
}

const singInPage = new SignIn()


test('Administration - Login - admin', async t => {

    const  user = new User('admin');

    await t
        .maximizeWindow()
        .click(singInPage.btnSignIn)
        .typeText(singInPage.txtUserName, user.username)
        .typeText(singInPage.txtPassword, user.password)
        .click(singInPage.btnLog)
        .expect(singInPage.icoAdmin.textContent).contains('Admin')
        .expect(singInPage.icoReports.textContent).contains('Reports')
});

test('Administration - Login - normal user', async t => {

    const  user2 = new User('normal');

    await t
    
        .maximizeWindow()
        .click(singInPage.btnSignIn)
        .typeText(singInPage.txtPassword, user2.password)
        .typeText(singInPage.txtUserName, user2.username)
        .click(singInPage.btnLog)
        .debug()
        .click(Selector('#mCSB_3_container > div > div:nth-child(4)'))
        .expect(Selector('#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-individual-container > div > div.employee-lookup-criteria > span.label.lookup-label').innerText).contains('Your Colleague')
});     

