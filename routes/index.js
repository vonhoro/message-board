var express = require("express");
var router = express.Router();
var app = express();
/* GET home page. */
const messages = [
  {
    text: "Hellllloo there",
    user: "A coooll guy",
    added: new Date(),
  },
  {
    text: "I am here my comarades",
    user: "A red guy",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Board", messages: messages });
});
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Create a new message" });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
