const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignIn');
const authToken = require('../middleware/authToken');
const userDetailController = require('../controller/userDetails');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');

router.post("/signup",userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailController)
router.get("/userLogout", userLogout)

//admin panel
router.get("/allUsers", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

module.exports = router;