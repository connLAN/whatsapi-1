const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const accountSid = "ACcde02089100f0a483b76738a932c718b";
const authToken = "a9e31f00a25d38e90a455a4e2b298459";

const client = require("twilio")(accountSid, authToken);
const client = require('twilio')();

//const fs = require("fs");
//const { error } = require("console");
//const filePath = 'reqLog.txt';
//const files = fs.readdirSync("media/");

// Request Handling
app.post('/logFile', function(req, res){
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
      body: "from abhishek server",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919870938538"
      // mediaUrl:
      //   "https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg",
    })
    .then((message) => console.log(message.sid))
    .done();
});

client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(m.sid)));

app.listen(8080, () => {
  console.log("Server is running on 8080");
});


