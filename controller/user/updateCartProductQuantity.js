const addToCartModel = require("../../models/Cart");

const updateCartProductQuantity = async(req, res)=>{
    try {
        const currentUserId = req?.userId
        const cartProductId = req?.body?._id
        const currentQuantity = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id : cartProductId}, ({
            ...(currentQuantity && {quantity : currentQuantity})
        }))

        res.status(200).json({
            message : "Product Updated",
            data : updateProduct,
            error: false,
            success : true
        })


        
    } catch (error) {
        res.status(500).json({
      message: error.message || error || "Internal Server Error",
      error: true,
      success: false,
    }); 
    }
}

module.exports = updateCartProductQuantity;