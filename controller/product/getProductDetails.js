const productModel = require("../../models/productModel");

const getProductDetailsController = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    res.status(200).json({
        message: 'OK',
        error: false,
        success: true,
        data : product
    })

  } catch (error) {
    res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = getProductDetailsController
