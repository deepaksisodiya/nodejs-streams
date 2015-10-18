/**
 * Created by deepaksisodiya on 18/10/15.
 */


var fs = require('fs');

var readStream = fs.createReadStream('file1.txt');
var writeStream = fs.createWriteStream('file2.txt');

readStream.pipe(writeStream);