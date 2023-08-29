// SOCKET
import React, { useEffect } from "react";
import { io } from "socket.io-client";
// const { io } = require("socket.io-client");

function Chat() {
  const options = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  const socket = io.connect("http://localhost:8000/");

  const handleClick = () => {
    socket.emit("send", { massage: "hello receiver" });
  };
  
  // socket.on("users", (data) => {
    //   console.log(data);
    // });
    useEffect(() => {
      console.log(socket);
      
      socket.on("receiver", (data) => {
        alert(data)
        console.log("receiver");
      });
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });
  }, []);
  return (
    <div>
      <h1>hello socket.io </h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default Chat;
