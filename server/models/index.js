var db = require('../db');

module.exports = {
  messages: {
    get: function () { }, // a function which produces all the messages
    post: function (requestBody, cb) {
      //(later, run a SELECT query to check for existing users with the same name

      //send mysql INSERT request with username
      console.log('about to run messages db.query');
      var querymessage = 'INSERT INTO messages (userID, room, message) VALUES ((SELECT user.id FROM users WHERE users.userName = \'' + requestBody.username + '\'), \'' + requestBody.roomname + '\', \'' + requestBody.message + '\');';
      console.log(querymessage);
      db.query(querymessage, (error, results, fields) => {
        if (error) {
          console.log('Error in model:', error);
        }
        console.log('Results in model:', results);
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
      var query = `INSERT INTO users (userName) VALUES ('${username}');`;
      console.log(query);
      db.query(query, (error, results, fields) => {
        if (error) {
          console.log('Error in model:', error);
        }
        cb(error, results);
      });
      //call callback based on results of request
    }
  }
};

