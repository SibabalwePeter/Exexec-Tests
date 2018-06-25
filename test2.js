/* Colleage Nomination for D&G */
import { Selector } from 'testcafe';
 const txtPassword = Selector('[data-datafield=Password]')
 const password = 'Passw0rd'

fixture `Colleage Nomination`
    .page `https://dg.singularwebsites.co.za/xexec/Dashboard`;

test('Colleage Nomination', async t => {
    await t
        /* Log in */ 
        .click('.btn-default')
        .typeText('#username', 'speter@singular.co.za')
        .typeText(txtPassword, password)
        .click('.landing-buttons .col-container .col1 .btn-primary')

    });