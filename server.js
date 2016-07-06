var express = require('express');
var app = express();
app.use(express.static('./'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
