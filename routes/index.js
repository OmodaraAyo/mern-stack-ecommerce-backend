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
const getProductDetailsController = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countNumberOfProductInCart = require("../controller/user/countNumberOfProductInCart");
const viewCartProduct = require("../controller/user/viewCartProduct");
const updateCartProductQuantity = require("../controller/user/updateCartProductQuantity");
const deleteCartProductById = require("../controller/user/deleteCartProductById");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

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

//product
router.post("/update-product", authToken, updateProductController);
router.get("/get-product-category", getProductCategoryController);
router.post("/get-all-product-category", getAllProductCategoriesController);
router.post("/get-product-details", getProductDetailsController);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

//add To Cart
router.post("/addToCart", authToken, addToCartController)
router.get("/countNumberOfProductInCart", authToken, countNumberOfProductInCart)
router.get("/view-cart-products",authToken, viewCartProduct)
router.post("/update-cart-product", authToken, updateCartProductQuantity)
router.post("/delete-cart-product", authToken, deleteCartProductById)

module.exports = router;
