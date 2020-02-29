var MessageView = {

  //class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"


  // <div

  // data-userID="<%- userID %>">
  // <%- userID %>
  // </div>

  render: _.template(`
      <!--

      -->
      <div class="chat">

        <div><%- message %></div>
      </div>
      <!--
            -->
    `)

};