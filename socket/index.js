const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  // When Connect
  console.log("user connected");
  // Take userid and socket id from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get messages
  socket.on("sendMessage", ({ senderId, recieverId, text })=>{
    const user = getUser(recieverId)
    io.to(user?.socketId).emit("getMessage",{
        senderId,text
    })
  });

  //When disconnect
  socket.on("disconnect", () => {
    // Remove user when disconnection
    removeUser(socket.id);
    console.log("A user disconnected");
    io.emit("getUsers", users);
  });
});
