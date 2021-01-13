# Running Mocha tests alone on the command line with Node/npm

Steps: 

1. `npm install`
2. `npm test`

This works because npm test is assigned to execute mocha, which by default will look for tests in ./test.

The tests themselves work because they are using Node's built-in assertion library. We use `chai` as the assertion library in the browser.