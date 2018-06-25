import { Selector } from 'testcafe';
import Page from './pageModel';

const txtPassword = Selector("[data-datafield=Password]");
const txtUser = Selector("#username");

var user = {password: "Passw0rd", usename: "bwebber@singular.co.za"};
const page = new Page();

fixture `Sign In test`
    .page `https://dg.singularwebsites.co.za/xexec`;

test('Sign in to D&G', async t => {
    await t
		.click('.btn-default')
        .typeText(txtUser, user.usename)
        .typeText(txtPassword, user.password)
        .click('.landing-buttons .col-container .col1 .btn-primary')
        .expect(Selector('#dashboard-container > div.master-right.master-column'))
});

fixture `Sign In test`
    .page `https://pepsico.singularwebsites.co.za/xexec/`;

test('Sign in to Pepsico', async t => {
    await t
		.click('.btn-default')
        .typeText(txtUser, user.usename)
        .typeText(txtPassword, user.password)
        .click('.landing-buttons .col-container .col1 .btn-primary')
        .expect(Selector('#dashboard-container > div.master-right.master-column'))
}); 

fixture `Sign In test`
    .page `https://singularwebsites.co.za/xexec/default.aspx`;

test('Sign in to Healthshield', async t => {
    await t
		.click(page.btnSignIn)
        .typeText(txtUser, user.usename)
        .typeText(txtPassword, user.password)
        .click(page.btnLog)
        .expect(page.afterSignIn)
});