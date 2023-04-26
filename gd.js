(function(ext) {
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
  ext.getAccountInfo = function(id, callback) {
    fetch('https://boomlings.com/database/getGJUserInfo20.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `targetAccountID=${id}&secret=Wmfd2893gb7`
    })
    .then(response => response.text())
    .then(data => {
      // process the response data here
      callback(data);
    })
    .catch(error => {
      // handle any errors here
    });
  };
  var descriptor = {
    blocks: [
      ['R', 'get account info with ID %s', 'getAccountInfo', '']
    ]
  };
  ScratchExtensions.register('Geometry Dash', descriptor, ext);
})({});
