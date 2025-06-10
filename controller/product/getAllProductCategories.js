const productModel = require("../../models/productModel");

const getAllProductCategoriesController = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const product = await productModel.find({ category })

    res.status(200).json({
        data: product,
        error: false,
        success: true,
        message: "All product categories fetched successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = getAllProductCategoriesController;
