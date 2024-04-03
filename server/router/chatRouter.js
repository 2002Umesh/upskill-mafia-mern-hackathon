const express = require("express");
const {
  accessChat,
  fetchChats,
} = require("../controller/chatController");
const authMiddleware=require("../middleware/auth-middleware")

const router = express.Router();

router.route("/").post(authMiddleware, accessChat);
router.route("/").get(authMiddleware, fetchChats);


module.exports = router;