const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write("Name: JPG")
  });

   // log message to player upon connection
   conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;