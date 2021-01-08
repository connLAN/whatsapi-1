const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const accountSid = 'ACcde02089100f0a483b76738a932c718b'; 
const authToken = 'a9e31f00a25d38e90a455a4e2b298459'; 
const client = require('twilio')(accountSid, authToken); 
 


//const fs = require("fs");
//const { error } = require("console");
//const filePath = 'reqLog.txt';
//const files = fs.readdirSync("media/");

// Request Handling
app.post('/logFile', (req, res) => {
   console.log(req);
//   let responseBody = {
//      host: req.headers.host,
//      path: req.route.path,
//      stack: req.route.stack,
//      methods: req.methods
//   }



  //console.log(responseBody);

//   try {
//      if(fs.existsSync(filePath)){

//       console.log(filePath);

//         fs.appendFile(filePath, JSON.stringify(responseBody), (error) => {
//            if (error) throw error;

//            //console.log(filePath);
//            console.log('File Updated Successfully');
//         })
//      } else {
//         fs.writeFile(filePath, JSON.stringify(responseBody), (error) => {
//            if (error) throw error;
//            console.log('File Created Successfully');
//         })
//      }
//   } catch(e) {
//      console.log('Some Error');
//   }
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


