(function () {
    'use strict';

    var lwip = require('lwip');

    function defaultOptions(options) {
        options = options || {};
        options.width = options.width || 100;
        options.height = options.height || 80;
        options.quality = options.quality || 80;
        options.format = options.format || 'jpg';
        return options;
    }

    function simpleThumbnailGenerator(options, callback) {

        options = defaultOptions(options);

        lwip.open(options.buffer, options.format, function (err, image) {
            image.resize(options.width, options.height, function (err, image) {
                if (err) {
                    callback(err, null);
                } else {
                    image.toBuffer(options.format, { quality: options.quality }, callback);
                }
            });
        });
    }

    module.exports = simpleThumbnailGenerator;

}).call(this);