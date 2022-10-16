const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

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
    },
    productImg: {
        type:String,
        required: [true, "Product Image is required"],
    },
    productQuantity: {
        type:Number,
        required: [true, "Product Quantity is required"]
    }

}, {timestamps:true})

const Order= mongoose.model("Order", OrderSchema)

module.exports = Order