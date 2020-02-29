var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('about to run models.messages.post');
      // console.log(req);
      models.messages.post(req.body, (err, result) => {
        if (err) {
          console.log('Error in controller:', err);
          return res.end();
        }
        res.end(result.toString());
      }); // a function which handles posting a message to the database
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) {
      // take a request object
      // convert the request to something to pass to the model
      // pass it to the model
      console.log('about to run models.users.post');
      // console.log(req);
      // console.log(req);
      models.users.post(req.body.username, (err, result) => {
        if (err) {
          console.log('Error in controller:', err);
          return res.end();
        }
        res.end(result.toString());
      });
      // respond to the POST request
    }
  }
};

