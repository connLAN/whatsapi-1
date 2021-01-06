const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false }));

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

//Twilio Authentication
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACcde02089100f0a483b76738a932c718b'; 
const authToken = '4dbffeda3d02b3a1396ab0c40f0050c6';
const twilio = require('twilio'); 
const client = new twilio(accountSid, authToken); 
 

  // Endpoints
app.post('/logFile',(req, res) => { 
   console.log(req);
   client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919870938538' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
 });

app.listen(8080,()=> {
console.log("Server is running on 8080");
});