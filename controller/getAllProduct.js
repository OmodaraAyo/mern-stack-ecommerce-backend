const productModel = require("../models/productModel");

const getAllProductController = async(req, res)=>{
    try {
        const allProduct = await productModel.find().sort({createdAt: -1});

        res.status(200).json({
            data : allProduct,
            error : false,
            success : true,
            message : "All product details fetched successfully"
        })
         
    } catch (error) {
          res.status(500).json({ 
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false 
        });
    }
}

module.exports = getAllProductController;