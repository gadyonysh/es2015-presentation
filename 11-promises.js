new Promise((resolve, reject) => {
  // code
  if (success) {
    resolve(data);
  } else {
    reject(err);
  }
}).then((data) => {
  // next step code
}).catch((err) => {
  // throw err or log
});


/// PhantomJS example

// Before Promisable "Callback Hell"

var ph = phantom.create(), dataUri;
try {
  ph.createPage(function(page) {
    page.open('http://www.google.com', function() {
      page.evalute(/* Browser context */function() {
        $('input[name="btnI"]').click()
      }, function() {
        ph.renderBase64('PNG', function(data) {
          dataUri = data;
          fs.writeFile('screenshot.dataUri', data, function() {
            ph.close();
          });
        })
      });
    });
  });
} catch(err) {
  ph.close();
  throw err;
}

// After Promisable "Chaining"

return phantom.create()
  .then((ph) => {
    this.phantom = ph;
    return this.phantom.createPage();
  }).then((page) => {
    this.page = page;
    return this.page.open('http://www.google.com')
  }).then(() => {
    return this.page.evalute(/* Browser context */function() {
      $('input[name="btnI"]').click()
    });
  }).then(() => {
    return this.page.renderBase64('PNG');
  }).then((dataUri) => {
    return new Promise((done) => { 
      fs.writeFile('screenshot.dataUri', dataUri, done.bind(null, dataUri))
    });
  }).then((dataUri) => {
    ph.close();
    return dataUri;
  }).catch((err) => {
    ph.close();
    throw err;
  });

/// Static methods

// Load all images
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // all loaded
}, function() {
  // one or more failed
});

// Race timeout
Promise.race([
    httpGet('http://example.com/file.txt'),
    delay(5000).then(function () {
        throw new Error('Timed out')
    });
])
.then(function (text) { ... })
.catch(function (reason) { ... });

