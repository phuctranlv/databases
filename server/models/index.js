var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('about to run get message query');
      var query = 'SELECT * from messages;';
      db.query(query, (error, results, fields) => {
        if (error) {
          console.log(error);
          callback(error, null);
        }
        console.log(results);
        callback(null, results);
      });

    }, // a function which produces all the messages
    post: function (requestBody, cb) {
      //(later, run a SELECT query to check for existing users with the same name

      //send mysql INSERT request with username
      console.log('about to run messages db.query');
      var query = 'INSERT INTO messages (userID, room, message) VALUES ((SELECT users.id FROM users WHERE users.userName = ? ), ? , ?);';

      var queryParams = [`${requestBody.username}`, `${requestBody.roomname}`, `${requestBody.message}`];

      db.query(query, queryParams, (error, results, fields) => {
        if (error) {
          console.log('Error in model:', error);
        }
        // console.log('Results in model:', results);
        cb(error, results);
      });
      //call callback based on results of request
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function (username, cb) {
      //(later, run a SELECT query to check for existing users with the same name

      //send mysql INSERT request with username
      console.log('about to run users db.query');
      var queryParams = [`${username}`];
      var query = 'INSERT INTO users (userName) VALUES (?);';
      // console.log(query);
      db.query(query, queryParams, (error, results, fields) => {
        if (error) {
          console.log('Error in model:', error);
        }
        cb(error, results);
      });
      //call callback based on results of request
    }
  }
};

