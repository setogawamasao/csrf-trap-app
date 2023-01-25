const express = require("express");
const session = require("express-session");
const app = express();
const port = 3002;

// htmlテンプレートエンジンを設定
app.set("view engine", "ejs");

app.get("/change-trap", (req, res) => {
  res.render("./change-trap.ejs");
});

app.listen(port, () => {
  console.log(`danger app listening at http://localhost:${port}`);
});
