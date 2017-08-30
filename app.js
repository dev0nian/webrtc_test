var fs = require("fs");
var express = require("express");
var https = require("https");
var app = express();
app.use(express.static("public"));

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(443);

