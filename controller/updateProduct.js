const uploadProductPermission = require("../helpers/permission");
const productModel = require("../models/productModel");

async function updateProductController(req, res) {
    try {

        console.log("Update product request body from the backend: ", req);
        if(!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied");
        }

        const { _id, ...resBody } = req.body;

        const updateProduct = await productModel.findByIdAndUpdate(
            _id, 
            resBody,
            { new: true }
        );
        if (!updateProduct) {
            throw new Error("Product not found");
        }

        res.status(200).json({
            message: "Product updated successfully",
            error: false,
            success: true,
            data: updateProduct
        });


    } catch (error) {
         res.status(500).json({ 
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false 
        });
    }
}

module.exports = updateProductController;