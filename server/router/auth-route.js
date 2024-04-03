const express = require("express")
const router = express.Router()
const authController = require("../controller/auth-controller")
const {signupSchema,loginSchema} = require('../validator/auth-validator')
const validate = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/auth-middleware')

router.route('/').get(authController.home)
router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/user').get(authMiddleware,authController.user)
router.route('/getallusers').get(authController.alluser)
router.route('/alluserupdate').patch(authController.alluserupdate)


module.exports = router;