var Messages = {


  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback) {

    // Comment line below out to prevent duplicate recent message
    Messages._data[message.id] = message;
    callback();
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.id] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.message = message.message || '';
    message.username = message.username || '';
    message.room = message.room || '';
    return message;
  }

};