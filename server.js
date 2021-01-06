const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
app.use(express.urlencoded({extended: false })); app.post('/logFile',(req, res) => { console.log(req); });
app.use(bodyParser.json());


// Download the helper library from https://www.twilio.com/docs/node/install 
//Your Account Sid and Auth Token from twilio.com/console and set the environment 
// variables. See http://twil.io/secureapp
const accountSid = process.env.TWILIO_ACCOUNT_SID;console.log(req); const authToken = process.env.TWILIO_AUTH_TOKEN;}); const client = 
require('twilio')(accountSid, authToken); app.listen(8080, ()=> { console.log("Your Server is running on Port === 8080");
});
client.messages .create({ body: 'This is the ship that made the Kessel Run in fourteen parsecs?', from: '+15017122661', to: '+15558675310'
   })
  .then(message => console.log(message.sid));
