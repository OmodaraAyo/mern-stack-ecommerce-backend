const addToCartModel = require("../../models/Cart");

const viewCartProduct = async (req, res) => {
  try {
    const currentUser = req?.userId;

    const cartItems = await addToCartModel.find({
      userId: currentUser,
    });

    res.status(200).json({
      data: cartItems,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = viewCartProduct;
