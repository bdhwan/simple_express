var port = process.env.TEST_PORT || 8888

const os = require('os');
const getId = require('docker-container-id');


const express = require("express");

const app = express();

app.enable("trust proxy");


// LB 체크용 
app.get('/healthcheck', function(req, res) {
    res.status(200).json('success- node-env:' + process.env.NODE_ENV);
  });



  app.get('/',async (req, res) => {
    return res.status(200).send("YAY! this is api server!!-" + port + ", " + process.env.NODE_ENV+", hostname ="+os.hostname()+", container-id = "+await getId());
  
  });


app.listen(port);
console.log("http://localhost:" + port);
console.log("NODE_ENV:" + process.env.NODE_ENV);

