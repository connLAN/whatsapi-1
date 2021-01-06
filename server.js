const express = require('express');
const app = express();


// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: false })); 

//Twilio Authentication
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACcde02089100f0a483b76738a932c718b'; 
const authToken = '4dbffeda3d02b3a1396ab0c40f0050c6';  
const client = require('twilio')(accountSid, authToken);

const MessagingResponse = require('twilio').twiml.MessagingResponse;

client.messages 
.create({ 
   body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
   from: 'whatsapp:+14155238886',       
   to: 'whatsapp:+919870938538' 
 }) 
.then(message => console.log(message.sid)) 
.done();
 

// Request Handling
app.post('/logFile', (req, res) => { 
   const twiml = new MessagingResponse();

   twiml.message('The Robots are coming! Head for the hills!');
 
   res.writeHead(200, {'Content-Type': 'text/xml'});
   res.end(twiml.toString());
});

app.listen(8080,()=> {
console.log("Server is running on 8080");
});