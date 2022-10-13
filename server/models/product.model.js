const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: {
        type:String,
        required: [true, "Product name is required"],
        minLength:[3, "Product name must be at least 3 characters"]
    },
    productPrice: {
        type:Number,
        required: [true, "product price is required"],
    },
    productDescription: {
        type: String,
        required: [true, "Product name is required"],
        minLength:[3, "Product name must be at least 3 characters"]
    },
    createdBy: { //added for LR
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps:true})

const Product= mongoose.model("Product", ProductSchema)

module.exports = Product