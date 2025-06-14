const productModel = require("../../models/productModel");

const getProductCategoryController = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category");

    const productPerCategory = [];

    for (const category of productCategory) {
      const product = await productModel.findOne({ category: category });
      if (product) {
        productPerCategory.push(product);
      }
    }

    res.status(200).json({
      message: "Product categories fetched successfully",
      error: false,
      success: true,
      data: productPerCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = getProductCategoryController;
