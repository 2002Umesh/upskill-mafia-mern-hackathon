const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controller/messageController");
const authController =require("../middleware/auth-middleware")

const router = express.Router();

router.route("/:chatId").get(authController, allMessages);
router.route("/").post(authController, sendMessage);

module.exports = router;