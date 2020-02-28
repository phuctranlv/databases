var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // take a request object
      // convert the request to something to pass to the model
      // pass it to the model
      models.users.post(req.json.username, (err, result) => {
        if (err) {
          console.log('Error in controller:', err);
          return res.end();
        }
        res.end(result);
      });
      // respond to the POST request
    }
  }
};

