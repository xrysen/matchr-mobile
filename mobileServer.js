const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const https = require("https");

https.globalAgent.maxSockets = 100;

const app = express();
const PORT = 9000;

app.use(cors());
app.use(bp());

let partnerPicks = [];
let userPicks = [];
const generatePartnerPicks = () => {
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum > 5 && partnerPicks.length > 2) {
      partnerPicks.push("Yes");
    } else {
      partnerPicks.push("No");
    }
  }
};

generatePartnerPicks();

app.post("/mobile/answer", (req, res) => {
  userPicks.push(req.body.msg);
  console.log("Partner: " + partnerPicks);
  console.log(userPicks);
  if (req.body.msg === "Yes") {
    if (partnerPicks[userPicks.length - 1] === "Yes") {
      console.log("Match!");
    }
  }
  res.end();
})

app.get("/mobile/reset", (req, res) => {
  partnerPicks = [];
  userPicks = [];
  generatePartnerPicks();
  console.log(partnerPicks);
})

app.get("/mobile", (req, res) => {
  res.json({ test: "Coming from the backend!", arr: partnerPicks });
});

app.post("/mobile/yes", (req, res) => {
  console.log(req.body.msg);
});

app.listen(PORT, console.log("Listening on port " + PORT));
