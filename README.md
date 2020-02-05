# codaisseur-week5-day3-middleware-bodyparser

Exercise: Try it out
module: express-bodyparser.js
HIGHTLIGHT: using express and body-parser
: app.use, app.post

Create a Node.js project and install the following dependencies:
body-parser@1.18.3
express@4.16.4
this project requires 'npm install express body-parser' in terminal

Copy the above example code into a new JavaScript file and run the program.
Test the code with this command: http -v :4000 foo=bar. Thanks to the -v flag you should see both the HTTP request and response
Confirm that the api logs the request body to the console
Now make a similar request but using HTTPie's "form" mode: http -v --form :4000 foo=bar
Confirm that the HTTP request is of the type application/x-www-form-urlencoded and that the express application logs the same information as before.

---

Exercise: adding ERROR HANDLER:
module: express-errorhandler.js
Reuse the Node.js project from the previous exercise.
Create a new JavaScript file and include the following code:
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res, next) => {
// Your code goes here
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
Implement the logic in the handler function so that 50% of the time (using Math.random()), we trigger the built-in error handler, and the other 50% of the time we respond with the text "Ok".
Call your endpoint several times and confirm that 50% of the time you get an error page (HTML).
