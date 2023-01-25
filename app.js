const express = require("express");
const session = require("express-session");
const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  // req.sessionにセッションの値が保存されるされる
  // 値が存在しない場合は、初期値を与える
  // if (!req.session.views) {
  //   req.session.views = 0;
  // }
  // カウントアップ
  // req.session.views++;
  // // アクセス回数を表示
  // res.send("Hello World! Count:" + req.session.views);
  var data = {};
  data.user = {};
  data.user.name = "万丈";
  // レンダリングを行う
  res.render("./index.ejs", data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
