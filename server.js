const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false }));

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.post('/logFile',(req, res) => { console.log(req); });

app.listen(8080,()=> {
console.log("Server is running on 8080");
});