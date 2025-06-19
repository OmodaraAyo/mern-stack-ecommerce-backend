const productModel = require("../../models/productModel")

const filterProductController = async(req, res)=>{
    try {

        const categoryList = req?.body?.category || []

        const product = await productModel.find({
           category : {
            "$in": categoryList
           }
        })

        res.status(200).json({
            data : product,
            message : "Product Category list",
            error : false,
            success : true
        })
       
    } catch (error) {
        res.status(500).json({
            data: error.message || error || "Internal server error",
            success: false,
            error : true
        })
    }
}

module.exports = filterProductController