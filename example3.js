/**
 * Created by deepaksisodiya on 18/10/15.
 */


var http = require('http');

http.createServer(function (req, res) {

  // req is the readable stream
  // res is the writable stream

  var body = '';

  // we want to get the data as utf8 strings
  // If we don't set an encoding, then we'll get Buffer objects
  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    try {
      var data = JSON.parse(body);
    } catch(err) {
      res.statusCode = 400;
      return res.end('error :', err.message);
    }
    res.write(typeof data);
    res.end();
  });

}).listen(3000);