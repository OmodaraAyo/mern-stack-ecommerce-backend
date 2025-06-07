const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignIn');
const authToken = require('../middleware/authToken');
const userDetailController = require('../controller/userDetails');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/uploadProduct');
const getAllProductController = require('../controller/getAllProduct');

router.post("/signup",userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailController)
router.get("/userLogout", userLogout)

//admin panel
router.get("/allUsers", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

//upload product
router.post("/upload-product", authToken, UploadProductController)

//get all product
router.get("/all-products", getAllProductController)

module.exports = router;