var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, cb) {
      //(later, run a SELECT query to check for existing users with the same name

      //send mysql INSERT request with username
      db.query(`INSERT INTO users (userName) VALUES (${username})`, (error, results, fields) => {
        if (error) {
          console.log('Error in model:', error);
        }
        cb(error, results);
      });
      //call callback based on results of request
    }
  }
};

