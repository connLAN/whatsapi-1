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
const { send } = require("process");
const file = 'reqLog.txt';
let Users = [];
// app.get('/', (req, res)=> {
//   console.log("You are in home");

//   res.write("You are in home");
//   res.end();
// });

// Request Handling
app.post('/checkUser', (req,res) => {
console.log(req);
if (req.body.Body = 'Hello'){
 if(Users.includes(req.body.From)){
    console.log("Yes it includes");
 } else {
    console.log("It doesn't includes");
 }
} else{
   res.send("Sorry You're not authenticated");
}
});
let users = [];
app.post('/logFile', (req, res) => {
   //console.log(req);
   let messageBody = req.body;
   console.log(messageBody)

try {
       if(fs.existsSync(file)){
  
        console.log(file);

       
         //  fs.appendFile(file, JSON.stringify(messageBody), (error) => {
         //     if (error) throw error;
  
         //     //console.log(file);
         //     console.log('File Updated Successfully');
         //  })
       } else {
          fs.writeFile(file, JSON.stringify(messageBody), (error) => {
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

  let data = req.body.Body;

  data = data.toUpperCase(); 
  let smsDetails = {
 sender: req.body.To,
 receiver: req.body.From,
 data: data
  };

//   client.messages 
//   .create({ 
//      body: smsDetails.data, 
//      from: smsDetails.sender,    
//      to: smsDetails.receiver 
//    }) 
//   .then(message => console.log(message.sid)) 
//   .done();

});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});


