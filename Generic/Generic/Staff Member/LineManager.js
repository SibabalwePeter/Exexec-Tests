import CreateNewProfile from '../Page Models/StaffPM';
import SignIn from '../Page Models/SignInPM';

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
        else if(typeOfUser == 'Line Manager'){
            this.username = 'speter2@singular.co.za';
        }
    }
    

    var person = {
        EmployeeCode: 'Test Line Manager',
        WorkEmail: 'speter2@singular.co.za',
        FirstName: 'Test Line ',
        Surname: 'Manager',
        Fullname: 'Test Line'
    }

    const singInPage = new SignIn()
    const newProfilePage = new CreateNewProfile()

    /*test('Create Line manager', async t => {
        const  user = new User('admin')
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
         .click(newProfilePage.cheIsLinemanager) 

         // save and proof
        .click(newProfilePage.btnSave)
        .click(newProfilePage.lblStaffData)
        .click(newProfilePage.btnFind)
        .typeText(newProfilePage.txtSearch, person.Fullname)
        .expect(newProfilePage.NewProfile.textContent).contains(person.WorkEmail)

    }); */

    test('check Line manager reports', async t => {
        const  user = new User('Line Manager')
        await t
            // Log In
            .maximizeWindow()
            .click(singInPage.btnSignIn)
            .typeText(singInPage.txtUserName, user.username)
            .typeText(singInPage.txtPassword, user.password)
            .click(singInPage.btnLog)
        
            // save and proof
            
            .click(newProfilePage.icoReport)
            .click(newProfilePage.dropReport)
            .expect(newProfilePage.dropReportChoice.innerText).contains('Nominations for Line Manager')

            // reports
    });



