const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({

    custName: {
        type:String,
        required:[true, "Name is required"]
    },
    custEmail: {
        type:String,
        required:[true, "Email is required"]
    },
    custLocation: {
        type:String,
        required:[true, "Location is required"]
    },
    custConcerns: {
        type:String,
        required:[true, "Questions/Concerns is required"],
        minLength:[5, "Must be at least 5 characters"]
    },
    createdBy: { //added for LR
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps:true})

const Feedback= mongoose.model("Feedback", FeedbackSchema)

module.exports = Feedback