/* Colleage Nomination for Pepsico */
import { Selector } from 'testcafe';
const sendSmile = Selector("#dashboard-container > div.master-center.master-column > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > img");
const chooseAward = Selector("#mCSB_1_container > div:nth-child(1) > div:nth-child(2) > div");
const btnColleage = Selector("#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.dashboard-main-panel.nominate > div > div:nth-child(2) > div:nth-child(1) > div");
const search = Selector("[data-datafield=LookupText]");
const person = Selector("#mCSB_8_container > table > tbody > tr > td:nth-child(1)");
const coreBehavior = Selector("#dashboard-container > div.master-center.master-column > div > div.nominate-content-container > div.nominate-award-details-container > div.col-container > div:nth-child(1) > div > div");
const reason = Selector("[data-datafield=RewardReason]");
const personalMessage = Selector("[data-datafield=PersonalMessage]");
const next = Selector("#NextButton");
const confirmationMessage = Selector("#dashboard-container > div.master-center.master-column > div > div.bread-crumb-container.nominate-bread-crumb-container > ol > li:nth-child(7) > span");
const recentAwards = Selector('#mCSB_1_container > div:nth-child(1) > div.recent-award');                
const password = Selector("[data-datafield=Password]");
const sentSmile = Selector('#side-menu > div > div:nth-child(4) > span');
const Award = Selector('#mCSB_1_container > tr:nth-child(1) > td.name-column > div');
const date = Selector('#mCSB_1_container > tr:nth-child(1) > td.date-column > span');
const nomanee = Selector('#mCSB_1_container > tr:nth-child(1) > td.award-column > div > div')

fixture `Colleage Nomination`
    .page `https://pepsico.singularwebsites.co.za/xexec/Dashboard`;

test('Colleage Nomination', async t => {
    await t
        /* Log in */
        .click('.btn-default')
        .typeText('#username', 'bwebber@singular.co.za')
        .typeText(password, 'Passw0rd')
        .click('.landing-buttons .col-container .col1 .btn-primary')

        /* Nominate someone */
        .click(sendSmile)
        .click(chooseAward)
        .click(btnColleage)
        .typeText(search, 'sibabalwe')
        .click(person)

        .click(coreBehavior)
        .typeText(reason, 'Siba2')
        .typeText(personalMessage, 'Siba2')
        .click(next)
        .click('#NextButton')
        .wait(10000)

        .expect(Selector(confirmationMessage).innerText).contains('Done!') 
        .click(next)

        /* Proof if most recent and sent awards */
        .expect(Selector(recentAwards).innerText).contains('Sibabalwe Peter')
        .debug()
        .click(sentSmile)
        .wait(1000)
        .expect(Selector(Award).innerText).contains('Siba Test card')
        .expect(Selector(date).innerText).contains('21 Jun 18')
        .expect(Selector(nomanee).innerText).contains('Sibabalwe Peter')
    });


    test('Colleage Nomination', async t => {
    await t
        /* Log in */
        .click('.btn-default')
        .typeText('#username', 'bwebber@singular.co.za')
        .typeText(password, 'Passw0rd')
        .click('.landing-buttons .col-container .col1 .btn-primary')

        /* Nominate someone */
        .click(sendSmile)
        .click(chooseAward)
        .click(btnColleage)
        .typeText(search, 'sibabalwe')
        .click(person)

        .click(coreBehavior)
        .typeText(reason, 'Siba2')
        .typeText(personalMessage, 'Siba2')
        .click(next)
        .click('#NextButton')
        .wait(10000)

        .expect(Selector(confirmationMessage).innerText).contains('Done!') 
        .click(next)

        /* Proof if most recent and sent awards */
        .expect(Selector(recentAwards).innerText).contains('Sibabalwe Peter')
        .debug()
        .click(sentSmile)
        .wait(1000)
        .expect(Selector(Award).innerText).contains('Siba Test card')
        .expect(Selector(date).innerText).contains('21 Jun 18')
        .expect(Selector(nomanee).innerText).contains('Sibabalwe Peter')
    });