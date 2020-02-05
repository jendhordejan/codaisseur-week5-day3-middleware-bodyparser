const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  // Implement the logic in the handler function so that 50% of the time
  // (using Math.random()), we trigger the built-in error handler,
  // and the other 50% of the time we respond with the text "Ok".
  // NOTE-reference: express-playground/middlewareIntro.js: failRandomlyMiddleware function below
  if (Math.random() < 0.5) {
    res.send("ok");
  } else {
    next("not ok"); // 1
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const failRandomlyMiddleware = (req, res, next) => {
// if (Math.random() < 0.5) {
//   res.status(500).end(); //2
// } else {
//   next(); // 1
// }
//   };
