const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Twilio } = require("twilio");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const accountSid = "ACcde02089100f0a483b76738a932c718b";
const authToken = "9dcc1d9c6e0600a37f9441a3aa9509a5";
const client = require("twilio")(accountSid, authToken);

const fs = require("fs");
const file = "reqLog.txt";

app.post("/logFile", (req, res) => {
  //console.log(req);
  let messageBody = req.body;
  console.log(messageBody);

  try {
    if (fs.existsSync(file)) {
      console.log(file);

      fs.appendFile(file, JSON.stringify(messageBody), (error) => {
        if (error) throw error;

        //console.log(file);
        console.log("File Updated Successfully");
      });
    } else {
      fs.writeFile(file, JSON.stringify(messageBody), (error) => {
        if (error) throw error;
        console.log("File Created Successfully");
      });
    }
  } catch (e) {
    console.log("Some Error");
  }
  res.redirect("/sendMsg");
});

app.post("/sendMsg", (req, res) => {
  let data = req.body.Body;

  data = data.toUpperCase();
  let smsDetails = {
    sender: req.body.To,
    receiver: req.body.From,
    data: data,
  };

  client.messages
    .create({
      body: smsDetails.data,
      from: smsDetails.sender,
      to: smsDetails.receiver,
    })
    .then((message) => console.log(message.sid))
    .done();
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
