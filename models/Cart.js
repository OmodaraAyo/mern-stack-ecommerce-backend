const { default: mongoose } = require("mongoose");

const addToCartSchema = mongoose.Schema({
    userId : String,
    productId : {
        ref : 'product',
        type : String,
    },
    quantity : Number,

}, {
    timestamps : true
})

const addToCartModel = mongoose.model("addToCart", addToCartSchema)

module.exports = addToCartModel;