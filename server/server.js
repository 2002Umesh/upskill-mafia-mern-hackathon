require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http")
const app = express();
 
const authRoute = require("./router/auth-route");
const mentorRoute = require("./router/mentor-route")
const searchRoute = require("./router/search-route")
const chatRoute = require("./router/chatRouter")
const messageRoute = require("./router/MessageRouter")

const connectDB = require("./utils/db");

const PORT = 9000;

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "POST,GET,PUT,DELETE,HEAD,PATCH",
  credentials: true,
};

const server = http.createServer(app)
const io = require("socket.io")(server,{
  pingTimeout:60000,
  cors: {
    origin: ["http://localhost:5173"],
    methods: "POST,GET,PUT,DELETE,HEAD,PATCH",
    credentials: true,
  }
})


app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use("/auth", authRoute);
app.use("/ment",mentorRoute)
app.use("/api",searchRoute);
app.use("/chat",chatRoute);
app.use("/message",messageRoute);
app.get("/",(req,res)=>{
  res.send("hello")
})

io.on("connection",(socket)=>{
  console.log('connected to socket.io',socket.id)

  socket.on("setup",(userData)=>{
    socket.join(userData)
    socket.emit("connected")
  })

  socket.on("join chat",(room)=>{
    console.log("room id",room)
    socket.join(room)
  })

  socket.on("new message", ({room,newMsg}) => {
    if (!newMsg || !newMsg.chat || !Array.isArray(newMsg.chat.users)) {
      console.log("Invalid message format: chat or chat.users not defined or not an array");
      return;
    }
  
    // const senderId = newMsg.sender._id;
    // const userId = newMsg.chat.users[0]._id;
  
    // if (senderId === userId) {
      // Emit the "message received" event to the user's ID
      socket.to(room).emit("message received", newMsg);
    // }
  });
    socket.on("disconnect", () => {
      // console.log("User Disconnected", socket.id);
    });

  });
  



connectDB().then(() => {
 server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
});
