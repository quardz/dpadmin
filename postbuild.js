var wget = require('node-wget');


var wpdbjson = 'http://wptest1.quardz.com/db.json';
var dest = __dirname + "/dist/dpadmin/db.json";
var option = {
  url: wpdbjson,
  dest: dest
};


wget({
        url:  wpdbjson,
        dest: dest,      // destination path or path with filenname, default is ./
        timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds
    },
    function (error, response, body) {
        if (error) {
            console.log('--- error:');
            console.log(error);            // error encountered
        } else {
            console.log('--- headers:');
            console.log(response.headers); // response headers
            console.log('--- body:');
            console.log(body);             // content of package
        }
    }
);



//console.log("postbuild is called", dest, asd);