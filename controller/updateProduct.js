async function updateProductController(req, res) {
    try {

        if(!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }

        const { _id, ...reqBody } = req.body;

        const updateProduct = await productModel.findByIdAndUpdate(
            _id, 
            reqBody,
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