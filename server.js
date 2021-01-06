const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const accountSid = "ACcde02089100f0a483b76738a932c718b";
const authToken = "67c91483cb14928e3d71a32ed32ee460"; 
const client = require('twilio')(accountSid, authToken);

// Request Handling
app.post('/logFile', (req, res) => { 
   client.messages 
      .create({ 
         body: 'from abhishek server', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919870938538' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
   
});

app.listen(8080,()=> {
console.log("Server is running on 8080");
});