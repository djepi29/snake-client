// establishes a connection with the game server & events upon connection

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // events upon connection
  conn.on('connect', () => {
    // login notice to client
    console.log("Successfully connected to game server");

    // snake initials
    conn.write("Name: JPG");

  });


  // data from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = {
  connect
};