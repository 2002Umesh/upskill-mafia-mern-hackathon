require("dotenv").config();
const express = require("express");
const cors = require("cors");

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

app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use("/auth", authRoute);
app.use("/ment",mentorRoute)
app.use("/api",searchRoute);
app.use("/chat",chatRoute);
app.use("/message",messageRoute);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
});
