import { Selector } from 'testcafe';
//import { ClientFunction } from 'testcafe';
import Page from './NominationPM';

fixture `Colleage Nomination`
    .page `https://pepsico.singularwebsites.co.za/xexec`;

    var nomanee = {FullName: "Sibabalwe Peter", userName: 'bwebber@singular.co.za', password: 'Passw0rd', awardType: "Siba Test card", date: Date.prototype};

    /*const getMonth = ClientFunction((month) => {
        var months = ["Jan","Feb","Marc","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
        return ((nomanee.date.getDate).toString().concat(" ", months[month], " ", nomanee.date.getFullYear.String.prototype.substring(2,3)));
    });*/

    const nominate = new Page();

 test('Colleage Nomination', async t => {
                    
    await t
        // Log in
        //.maximizeWindow()
        .click(nominate.btnSignIn)
        .typeText(nominate.txtUserName, nomanee.userName)
        .typeText(nominate.password, nomanee.password)
        .click(nominate.btnLog)

        // Nominate someone 
        .click(nominate.sendSmile)
        .click(nominate.chooseAward)
        //const Award = Selector('#mCSB_1_container > tr:nth-child(1) > td.name-column > div')
        .click(nominate.btnColleage)
        .typeText(nominate.search, nomanee.FullName)
        //const nomaneeNameOnChoosing = Selector('#mCSB_8_container > table > tbody > tr > td:nth-child(2) > div').innerText
        .click(nominate.person)

        .click(nominate.coreBehavior)
        .typeText(nominate.reason, 'Siba2')
        .typeText(nominate.personalMessage, 'Siba2')
        .click(nominate.btnNext)
        .click(nominate.btnNext) 
        .expect(Selector(nominate.confirmationMessage).innerText).contains('Done!') 
        .click(nominate.btnNext) 

        // Proof if most recent and sent awards 
        .expect(Selector(nominate.recentAwards).innerText).contains(nomanee.FullName)
        .click(nominate.sentSmile)

        .expect(Selector(nominate.award).innerText).contains(nomanee.awardType)
        //.expect(Selector(date).innerText).contains(getMonth(nomanee.date.getMonth))
        .expect(Selector(nominate.nomaneeNameOnProv).innerText).contains(nomanee.FullName)
    }); 