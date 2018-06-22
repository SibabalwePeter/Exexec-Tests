/* Colleage Nomination for D&G */
import { Selector } from 'testcafe';
const clickNominate = Selector("#side-menu > div > div:nth-child(2) > div > img");
const btnColleage = Selector("#mCSB_3_container > div:nth-child(2) > div:nth-child(1) > div");
const searchBar = Selector("[data-datafield=LookupText]");
const person = Selector("#mCSB_8_container > table > tbody > tr:nth-child(1) > td:nth-child(1)");
const reason = Selector("[data-datafield=RewardReason]");
const personalMessage = Selector("[data-datafield=PersonalMessage]");
const next = Selector("#NextButton > span:nth-child(1)");
const submit = Selector("#NextButton");
const confirmationMessage = Selector("#dashboard-container > div.master-center.master-column > div > div.bread-crumb-container.nominate-bread-crumb-container > ol > li:nth-child(6) > span")
const logout = Selector('#cmSecurity > div > div.Selectable > div:nth-child(2) > a')
const nomaneeUsername = 'speter@singular.co.zadg'
 const txtPassword = Selector('[data-datafield=Password]')
 const password = 'Passw0rd'

fixture `Colleage Nomination`
    .page `https://dg.singularwebsites.co.za/xexec/Dashboard`;

test('Colleage Nomination', async t => {
    await t
        /* Log in */ 
        .click('.btn-default')
        .typeText('#username', 'bwebber@singular.co.za')
        .typeText(txtPassword, password)
        .click('.landing-buttons .col-container .col1 .btn-primary')

         /* Nominate someone */
        .click(clickNominate)
        .click(btnColleage)
        .typeText(searchBar, 'Sibabalwe')
        .click(person)
        .typeText(reason, 'test')
        .typeText(personalMessage, 'test')
        .click(next)
        .click(submit)
        .wait(1000)
        .expect(Selector(confirmationMessage).innerText).contains('Done!')

         /* Log out to confirm message in most recent award */
        .hover('#mainform > div:nth-child(3) > div.header-main > div > div.top-menus.UIContainer > div > div.login-container > div > span:nth-child(1)')
        .click(logout)

         /*Log in as nomanee */
        .click('.btn-default')
        .typeText('#username', nomaneeUsername)
        .typeText(txtPassword, password)
        .click('.landing-buttons .col-container .col1 .btn-primary')
    }); 