import { Selector } from 'testcafe';
//import { ClientFunction } from 'testcafe';
import Page from './pageModel';

fixture `Colleage Nomination`
    .page `https://pepsico.singularwebsites.co.za/xexec/Dashboard`;

    var nomanee = {FullName: "Sibabalwe Peter", userName: 'bwebber@singular.co.za', password: 'Passw0rd', awardType: "Siba Test card", date: Date.prototype};

    /*const getMonth = ClientFunction((month) => {
        var months = ["Jan","Feb","Marc","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
        return ((nomanee.date.getDate).toString().concat(" ", months[month], " ", nomanee.date.getFullYear.String.prototype.substring(2,3)));
    });*/

    const page = new Page();

 test('Colleage Nomination', async t => {
                    
    await t
        // Log in
        //.maximizeWindow()
        .click(page.btnSignIn)
        .typeText(page.txtUserName, nomanee.userName)
        .typeText(page.password, nomanee.password)
        .click(page.btnLog)

        // Nominate someone 
        .click(page.sendSmile)
        .click(page.chooseAward)
        //const Award = Selector('#mCSB_1_container > tr:nth-child(1) > td.name-column > div')
        .click(page.btnColleage)
        .typeText(page.search, nomanee.FullName)
        //const nomaneeNameOnChoosing = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(2) > div').innerText
        .click(page.person)

        .click(page.coreBehavior)
        .typeText(page.reason, 'Siba2')
        .typeText(page.personalMessage, 'Siba2')
        .click(page.next)
        .click(page.btnNext)

        .expect(Selector(page.confirmationMessage).innerText).contains('Done!') 
        .click(page.next) 

        // Proof if most recent and sent awards 
        .expect(Selector(page.recentAwards).innerText).contains(nomanee.FullName)
        .click(page.sentSmile)

        .debug()
        .expect(Selector(page.award).innerText).contains(nomanee.awardType)
        //.expect(Selector(date).innerText).contains(getMonth(nomanee.date.getMonth))
        .expect(Selector(page.nomaneeNameOnProv).innerText).contains(nomanee.FullName)
    }); 