var simpleThumbnailGenerator = require('./../src/');
var fs = require('fs');

fs.readFile(__dirname + '/kp.jpg', function (err, buffer) {
    simpleThumbnailGenerator({ buffer: buffer }, function (err, data) {
        if (err) {
            console.log('err', err);
        }
        else {
            console.log('data', data);
        }
    });
});

