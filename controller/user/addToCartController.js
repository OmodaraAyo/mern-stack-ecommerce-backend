const addToCartModel = require("../../models/Cart");

const addToCartController = async(req, res) => {
  console.log(req)
  try {
    const { productId } = req?.body;
    const currentUser = req?.userId;
    const isProductAvailable = await addToCartModel.findOne({ productId })

    if(isProductAvailable){
        return res.status(500).json({
            message : "Already exists in cart",
            success : false,
            error : true
        })
    }

    const payload = {
      userId: currentUser,
      productId: productId,
      quantity: 1,
    };

    const addToCart = new addToCartModel(payload)
    const saveProduct = await addToCart.save();

    return res.status(200).json({
        message : "Product Added to cart",
        success : true,
        error : false,
        data : saveProduct
    })
     
  } catch (error) {
    res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
