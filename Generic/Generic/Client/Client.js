import CreateClient from '..Page Models/ClientPM';
import SignIn from '../Page Models/SignInPM'

fixture `Testing Client`
    .page `https://singularwebsites.co.za/xexec/Dashboard`;
    
    var User = function(typeOfUser){
        this.password = 'Passw0rd';
       
        if(typeOfUser == 'admin'){
            this.username = 'bwebber@singular.co.za';
        }
        else if(typeOfUser == 'normal'){ 
            this.username = 'bwebber@singular.co.za';
        }
    }

    var company = {
        name: 'test',
        number: '123',
        contactName: 'testuser1',
        contactNumber: '123',
        contactEmail: 'speter@singular.co.za',
        subdomain: 'testx',
        financialYear: '01 Feb 2018',
        goLiveDate: '01 Jun 2018'
    }

const singInPage = new SignIn()


test('CreateClient - as admin', async t => {

    const  user = new User('admin');
    const clientPage = new CreateClient()

    await t

        // Log In
        .maximizeWindow()
        .click(singInPage.btnSignIn)
        .typeText(singInPage.txtUserName, user.username)
        .typeText(singInPage.txtPassword, user.password)
        .click(singInPage.btnLog)
        .expect(singInPage.icoAdmin.textContent).contains('Admin')
        .expect(singInPage.icoReports.textContent).contains('Reports')

        // navigate to new client
        .click(clientPage.icoAdmin)
        .click(clientPage.btnClients)
        .click(clientPage.btnNewClient)

        // company details 
        .typeText(clientPage.txtCompanyName, company.name)
        .typeText(clientPage.txtFinancialYear, company.financialYear)

        // contact details
        .typeText(clientPage.txtContactName, company.contactName)
        .typeText(clientPage.txtContactNumner, company.contactNumber)
        .typeText(clientPage.txtContactEmail, company.contactEmail)

        // Activation Details
        .typeText(clientPage.txtGoLivedate, company.goLiveDate)

        // Authentication session
        .click(clientPage.dropUserLoginIdentifier)
        .click(clientPage.dropUserLoginIdentifierChoice)
        .click(clientPage.dropUserregistrationType)
        .click(clientPage.dropUserRegistrationTypeChoice)

        // plartform details
        .click(clientPage.dropClientLevel)
        .click(clientPage.dropCleintLevelChoice)
        .click(clientPage.dropClientBillType)
        .click(clientPage.dropCleintBillTypeChoice)
        .typeText(clientPage.txtSubDomain, company.subdomain)

        .click(clientPage.btnSave)
});