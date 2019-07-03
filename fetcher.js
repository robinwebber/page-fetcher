const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');



request(args[0], (error, response, body) => {
  
  fs.writeFile(args[1], body, function(err) {
    if (err) {
      return console.log(err);
    }
    const stats = fs.statSync(args[1]);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`);
  });
});


