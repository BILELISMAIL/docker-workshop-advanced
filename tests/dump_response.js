var casper = require('casper').create();
casper.start();

casper.open('http://borisschapira.com/');

casper.then(function dumpHeaders(){
  this.currentResponse.headers.forEach(function(header){
    console.log(header.name +': '+ header.value);
  });
  console.log(this.currentResponse.body);
});


casper.run(function(){
  this.exit();
});