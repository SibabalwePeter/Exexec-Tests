import CreateNewProfile from './StaffPM';
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


    var person = {
        EmployeeCode: 'Testuser2',
        WorkEmail: 'Test@ndfkgnkdf',
        FirstName: 'Test6',
        Surname: 'test',
        Fullname: 'Test6 Test'
    }

    const singInPage = new SignIn()
    const newProfilePage = new CreateNewProfile()
    const  user = new User('admin')

    test('Create Award Scehme', async t => {
    
        await t
         // Log In
         .maximizeWindow()
         .click(singInPage.btnSignIn)
         .typeText(singInPage.txtUserName, user.username)
         .typeText(singInPage.txtPassword, user.password)
         .click(singInPage.btnLog)
        
         // naviage to page
         .click(newProfilePage.icoAdmin)
         .click(newProfilePage.btnStaffData)
         .click(newProfilePage.btnNewProfile) 
        
         // fill in information
         .typeText(newProfilePage.txtEmployeeCode, person.EmployeeCode)
         .typeText(newProfilePage.txtWorkEmail, person.WorkEmail)
         .typeText(newProfilePage.txtFirstName, person.FirstName)
         .typeText(newProfilePage.txtSurname, person.Surname) 

         // save and proof
        .click(newProfilePage.btnSave)
        .click(newProfilePage.lblStaffData)
        .click(newProfilePage.btnFind)
        .typeText(newProfilePage.txtSearch, person.Fullname)
        .expect(newProfilePage.NewProfile.textContent).contains(person.WorkEmail) 
    });

    //.expect(Selector(nominate.nomaneeNameOnProv).innerText).contains(nomanee.FullName)