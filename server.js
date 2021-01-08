const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Twilio } = require("twilio");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const accountSid = 'ACcde02089100f0a483b76738a932c718b'; 
const authToken = 'eab311377b64285e6af44c88965b5490'; 
const client = require('twilio')(accountSid, authToken); 
 


const fs = require("fs");
const filePath = 'reqLog.txt';

app.get('/', (req, res)=> {
  console.log("You are in home");

  res.write("You are in home");
  res.end();
});
// Request Handling
app.post('/logFile', (req, res) => {
   //console.log(req);
   let messageBody = req.body;
   console.log(messageBody)

try {
       if(fs.existsSync(filePath)){
  
        console.log(filePath);
  
          fs.appendFile(filePath, JSON.stringify(messageBody), (error) => {
             if (error) throw error;
  
             //console.log(filePath);
             console.log('File Updated Successfully');
          })
       } else {
          fs.writeFile(filePath, JSON.stringify(messageBody), (error) => {
             if (error) throw error;
             console.log('File Created Successfully');
          })
       }
    } catch(e) {
       console.log('Some Error');
    }
    res.redirect('/sendMsg');
  });

app.post('/sendMsg', (req, res) => {
  client.messages 
  .create({ 
     body: 'Your appointment is coming up on July 21 at 3PM', 
     from: 'whatsapp:+14155238886',       
     to: 'whatsapp:+919870938538' 
   }) 
  .then(message => console.log(message.sid)) 
  .done();

});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});


