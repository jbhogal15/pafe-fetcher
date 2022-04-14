const request = require('request');
const fs = require('fs');


let url = process.argv[2];
let path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(path, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});