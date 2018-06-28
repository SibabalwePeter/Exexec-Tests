const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(["Log In/SignIn.js", "Client/Client.js", "Award/Award.js", "Staff Member/Staff.js", "Nominations/ColleageNomination.js", "Award/TeamAward.js"])
            .browsers(['chrome'])
            .run();
    })

    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });