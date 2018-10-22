const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const helmet = require('helmet');

let port = process.env.PORT ? process.env.PORT : 8080;
let env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

// Setup our Express pipeline
const app = express();

if (env !== "test") {
  app.use(logger("dev"));
}
app.set("views", __dirname);
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'sessionID',
  keys: ['asdfD^J9d#aDa*', '/T&vuE9d3X%jw', 'h4%a8UbOe#z'],
  cookie: {
    secure: true,
    //httpsOnly: true,
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 3) // 3-hour session
  }
}));
app.use(helmet()); // security

// Import our routes
require("./routes")(app);

// Add basic data
app.admins = [
  {
    email: "joshua.wilson@vanderbilt.edu",
    first_name: "Josh",
    last_name: "Wilson"
  }
];

app.orgs = [
  {
    name: "vu-csx891-f18"
  }
];

app.listen(process.env.PORT || 8080);

console.log('TakeANumber server is listening on port ' + port);

