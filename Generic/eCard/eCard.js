import CreateeCard from './eCardPM';
import SignIn from '../Log In/SignInPM';

fixture `Testing eCard`
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

    var eCard = {
        name: 'test',
        subject: 'test',
        html: 'testx',
        image: './sure.png'
       
    }

const eCardPage = new CreateeCard()
const singInPage = new SignIn()

test('CreateClient - as admin', async t => {

    const  user = new User('admin');

    await t

        // Log In
        .maximizeWindow()
        .click(singInPage.btnSignIn)
        .typeText(singInPage.txtUserName, user.username)
        .typeText(singInPage.txtPassword, user.password)
        .click(singInPage.btnLog)
        .expect(singInPage.icoAdmin.textContent).contains('Admin')
        .expect(singInPage.icoReports.textContent).contains('Reports')
        .debug()

        // Create ecard templates
        .click(eCardPage.icoAdmin)
        .click(eCardPage.btneCard)
        .click(eCardPage.btnNeweCard)
        .typeText(eCardPage.txtTemplatename, eCard.name)
        .typeText(eCardPage.txtSubject, eCard.subject)
        .typeText(eCardPage.txtHtml, eCard.html)
        .click(eCardPage.icoImage)
        
        .setFilesToUpload(eCardPage.icoImage, ['./sure.png'])
        //.click(eCardPage.btnSave)
});


