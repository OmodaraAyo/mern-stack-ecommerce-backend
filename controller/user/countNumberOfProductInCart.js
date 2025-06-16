const addToCartModel = require("../../models/Cart");

const countNumberOfProductInCart = async(req, res) => {
    try {
        const userId = req?.userId

        const count = await addToCartModel.countDocuments({
            userId : userId
        })

        res.status(200).json({
            data : {
                count : count
            },
            message : "ok",
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

module.exports = countNumberOfProductInCart;