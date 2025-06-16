const { default: mongoose } = require("mongoose");

const addToCartSchema = mongoose.Schema({
    userId : String,
    productId : String,
    quantity : Number,

}, {
    timestamps : true
})

const addToCartModel = mongoose.model("addToCart", addToCartSchema)

module.exports = addToCartModel;