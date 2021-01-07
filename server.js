const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const accountSid = "ACcde02089100f0a483b76738a932c718b";
const authToken = "67c91483cb14928e3d71a32ed32ee460";
const client = require("twilio")(accountSid, authToken);

//const fs = require("fs");
//const files = fs.readdirSync("media/");

// Request Handling
app.post("/api/logFile", (req, res) => {
  //console.log(req);
  const files = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0lTZC3giRLsOCZXIHQhnNA&ust=1610089457588000&source=images&cd=vfe&ved=2ahUKEwik5NbioInuAhWD6jgGHUIDDDIQjRx6BAgAEAc','https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fphoto%2F72975551.cms&imgrefurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Flife-style%2Fevents%2Fsurya-grahan-today-annular-solar-eclipse-2019-december-images-photos-pics-video-check-out-these-breathing-pictures-of-the-seasons-last-surya-grahan-of-26-december-2019-india%2Fphotostory%2F72975550.cms&tbnid=pTd2OIa33-6LVM&vet=12ahUKEwiv_OPKoYnuAhV28jgGHYpCBloQMygDegUIARDSAQ..i&docid=78aIM0GrmvG9rM&w=1200&h=900&q=images&ved=2ahUKEwiv_OPKoYnuAhV28jgGHYpCBloQMygDegUIARDSAQ','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud%2Fstock.html&psig=AOvVaw0gwkhqLj7yaIHjXUZc6GGh&ust=1610089675906000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjsqN6hie4CFQAAAAAdAAAAABAD']
  console.log(files);
  /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
  var chosenFile = this.files[Math.floor(Math.random() * files.length)];
  console.log(chosenFile);
  client.messages
    .create({
      body: "from abhishek server",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919870938538",
      mediaUrl: chosenFile
    })
    .then((message) => console.log(message.sid))
    .done();
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
