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
      page.evalute(function() {
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

phantom.create()
  .then((ph) => {
    this.phantom = ph;
  })
  .then(() => {
    return this.phantom.createPage();
  })
  .then(page => this.poge = page)
  .then(() => {
    return page.open('http://www.google.com')
  }).then(() => {
    return this.page.evalute(function() {
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