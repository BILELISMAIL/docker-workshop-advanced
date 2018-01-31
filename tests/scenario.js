casper.options.viewportSize = { width: 800, height: 600 };

mySite = 'http://192.168.1.68:8080';

casper.test.begin('docker workshop - Testing sessions', function suite(test) {
  casper.echo("Total_Step 6");
  casper.start(mySite +'/app.php/en/login', function() {
    test.assertExists('body');
    test.assertHttpStatus(200);
    test.assertExists('anna_admin');

  });

  casper.then(function() {
    this.mouse.click('.button.btn.btn-primary');
    this.waitForUrl(/admin\/post/, function() {
      // test.assertUrlMatch(/admin\/post/);
      test.assertHttpStatus(200);
      test.assertExists('Liste des articles');
    }, function () {
      test.fail("Login didn't work");
    },
    2000);
  });

  casper.run(function() {
    test.done();
  });
});