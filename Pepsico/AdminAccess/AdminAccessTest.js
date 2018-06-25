
import Page from './SendSentRecievedPM';

fixture `Check admin Access`
    .page `https://pepsico.singularwebsites.co.za/xexec`;
    console.log("1")
    var admins = ["bwebber@singular.co.za",		
                "jamie.king@xexec.com", 
                "nwatson@singularsystems.co.uk", 
                "alison.barrett@xexec.com",
                "test2.test@singular.co.za",		
                "kpurves@singular.co.za",		
                "fbrown@healthshield.co.uk",			
                "jyotika.halai@xexec.com",		
                "darren.chertkow@xexec.com",	
                "jyotika.halai@gmail.com"];

    function checkIn(email, adminusers){
        var i = 0;
        while(i < adminusers.legth){
            if(email == admins[i]){ return true; } 
        }
        return false;
    }
    console.log("2")
    var user = { userName: "acronwright@singular.co.za", password: "Passw0rd"};
    console.log("3")
    const checkAdminAccess = new Page()
    console.log("4")

    test('Recieved nominations', async t => {
        console.log("4")
        
        console.log("5")

        if (a == b){
            await t
        //"acronwright@singular.co.za"
            // Log in
            .click(checkAdminAccess.btnSignIn)
            .typeText(checkAdminAccess.txtUserName, user.userName)
            .typeText(checkAdminAccess.txtPassword, user.password)
            .click(checkAdminAccess.btnLog)
            .click(checkAdminAccess.icoReceived)


            if(checkIn(user.userName, admins)){
                //.expect(checkAdminAccess.popMustEmployee).contains('Ok')
                t.click(checkAdminAccess.btnOk)     
            }

            await t
                .click
        });
        }
        await t
        //"acronwright@singular.co.za"
            // Log in
            .click(checkAdminAccess.btnSignIn)
            .typeText(checkAdminAccess.txtUserName, user.userName)
            .typeText(checkAdminAccess.txtPassword, user.password)
            .click(checkAdminAccess.btnLog)
            .click(checkAdminAccess.icoReceived)
            if(checkIn(user.userName, admins)){
                //.expect(checkAdminAccess.popMustEmployee).contains('Ok')
                t.click(checkAdminAccess.btnOk)     
            }
        });
        //testcafe chrome sentSendRecievedTest.js

       /* test('Recieved nominations', async t => {
            await t
                // Log in
                .click(checkAdminAccess.btnSignIn)
                .typeText(checkAdminAccess.txtUserName, user.userName)
                .typeText(checkAdminAccess.txtPassword, user.password)
                .click(checkAdminAccess.btnLog)
                .click(checkAdminAccess.icoReceived)
          
                .click(checkAdminAccess.btnOk)
                    
            }); 

            test('Recieved nominations', async t => {
                console.log("4")
                
                console.log("5")
                await t
                .click(checkAdminAccess.btnSignIn)
                .typeText(checkAdminAccess.txtUserName, user.userName)
                .typeText(checkAdminAccess.txtPassword, user.password)
                .click(checkAdminAccess.btnLog)
                .click(checkAdminAccess.icoReceived)
                .click(checkAdminAccess.btnOk)
            });  */