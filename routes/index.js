const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const authToken = require("../middleware/authToken");
const userDetailController = require("../controller/user/userDetails");
const userLogout = require("../controller/user/userLogout");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getAllProductController = require("../controller/product/getAllProduct");
const updateProductController = require("../controller/product/updateProduct");
const allUsers = require("../controller/user/allUsers");
const getProductCategoryController = require("../controller/product/getProductCategory");
const getAllProductCategoriesController = require("../controller/product/getAllProductCategories");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailController);
router.get("/userLogout", userLogout);

//admin panel
router.get("/allUsers", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//upload product
router.post("/upload-product", authToken, UploadProductController);

//get all product
router.get("/all-products", getAllProductController);

//update product
router.post("/update-product", authToken, updateProductController);
router.get("/get-product-category", getProductCategoryController);
router.post("/get-all-product-category", getAllProductCategoriesController);

module.exports = router;
