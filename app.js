const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const csrf = require("csurf");
const app = express();

const sess = {
  secret: "key12345",
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: true,
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

const csrfProtection = csrf({ cookie: false });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sess));

app.set("view engine", "pug");

app.get("/", csrfProtection, (req, res) => {
  res.render("index", { csrfToken: req.csrfToken() });
});

app.post("/", csrfProtection, (req, res) => {
  res.send(req.body.text);
});

app.listen("3000", () => {
  console.log("Application started");
});
