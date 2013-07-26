var express = require('express');
var app = express();
app.use(express.logger());

var fromHtml = fs.readFileSync('index.html');

//buffer1 = new Buffer(256);
//buffer1.write(fromHtml);

app.get('/', function(request, response) {
  response.send('Working?');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
