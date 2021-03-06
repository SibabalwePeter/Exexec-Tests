import SignIn from './SignInPM';

fixture `Check admin Access`
    .page `https://singular.singularwebsites.co.za/xexec/Dashboard`;

var User = function(typeOfUser){
    this.password = 'Passw0rd';
   
    if(typeOfUser == 'admin'){
        this.username = 'acronwright@singular.co.za';
    }
    else if(typeOfUser == 'normal'){ 
        this.username = 'bwebber@singular.co.za';
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
        //.expect(singInPage.icoAdmin.textContent).notContains('Admin')
        //.expect(singInPage.icoReports.textContent).notContains('Reports')
});

