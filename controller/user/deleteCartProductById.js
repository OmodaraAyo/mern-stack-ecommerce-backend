const addToCartModel = require("../../models/Cart")

const deleteCartProductById = async(req, res)=>{
    try {
        
        const currentUserId = req?.currentUserId
        const productId = req?.body?._id

        const deleteProduct = await addToCartModel.deleteOne({_id : productId})

        res.status(200).json({
            message :"Product removed from cart",
            success : true,
            error : false,
            data : deleteProduct
        })
        
    } catch (error) {
        res.status(500).json({
            message : error.message || error || "Internal Server Error",
            error: true,
            success : false
        })
    }
}

module.exports = deleteCartProductById