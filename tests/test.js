var casper = require("casper").create({
    }),
    utils = require('utils'),
    http = require('http'),
    fs = require('fs');

casper.start('http://192.168.1.68:8080/app.php/fr',function(response){
  this.wait(1000, function(){
    this.page.plainText;
    // utils.dump(response.body);
  });
});

// casper.thenOpen('http://192.168.1.68:8080/app.php/fr', function(response) {
//     // casper.capture('test.png');
//       utils.dump(response);
//       if (response == undefined || response.status >= 400) this.echo("failed");
// });

// casper.then(function(response) {
//   this.click('button.btn.btn-primary');
//   this.wait(2000, function(){
//     utils.dump(response);
//   })
//   // this.waitForUrl(/post/, function() {
//   //   utils.dump(response);
//   // }, function(){
//   //   utils.dump(response);
//   //   this.echo('timeout');
//   // },
//   // 2000);
// });

// casper.then(function() {
//     console.log('clicked ok, new location is ' + this.getCurrentUrl());
// });
//
// casper.on('http.status.404', function(resource) {
//   this.echo('wait, this url is 404: ' + resource.url);
// });

casper.run(function() {
  casper.exit();
});
