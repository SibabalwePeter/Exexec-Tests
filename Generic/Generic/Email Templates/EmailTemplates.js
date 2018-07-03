import SignIn from '../Page Models/SignInPM';
import CreateEmailTemplate from './EmailTemplatePM';

fixture `Team Nomination`
    .page `https://testx.singularwebsites.co.za/xexec`;

    var User = function(typeOfUser){
        this.password = 'Passw0rd';
       
        if(typeOfUser == 'admin'){
            this.username = 'bwebber@singular.co.za';
        }
        else if(typeOfUser == 'normal'){ 
            this.username = 'speter@singulr.co.za';
        }
    }


var emailTemplate = {name: "Test6 template", subjectLine: "Test", htmlText:"<h1>Test</ht>"}
const emailTemplatePage = new CreateEmailTemplate();
const SignInPage = new SignIn()
const user = new User('admin')

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
        .click(emailTemplatePage.icoAdmin)
        .click(emailTemplatePage.btnEmailTemplates)
        .click(emailTemplatePage.btnEmailTemplatesSearch)
        .click(emailTemplatePage.btnNewEmailTemplates)
        .typeText(emailTemplatePage.txtEmailTemplateName, emailTemplate.name)
        .typeText(emailTemplatePage.txtSubjectLine, emailTemplate.subjectLine)
        .typeText(emailTemplatePage.txtHtml, emailTemplate.htmlText)
        .click(emailTemplatePage.btnSave)
        .click(emailTemplatePage.lblTemplates)
        //.typeText(emailTemplatePage.txtSearchTemplate, emailTemplate.name)
        .expect(emailTemplatePage.template.innerText).contains(emailTemplate.name) 
    });