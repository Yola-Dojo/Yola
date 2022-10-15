const Feedback= require('../models/feedback.model')
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const FeedbackController = {

    create:(req,res)=>{

        const newFeedbackObject = new Feedback(req.body);

        const decodedJWT = jwt.decode(req.cookies.usertoken,{
            complete:true
        })

        newFeedbackObject.createdBy = decodedJWT.payload.id
    

        newFeedbackObject.save(req.body)
        .then((feedback)=>{
            res.status(201).json({feedback:feedback})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong creating feedback", error:err})
        })
    },

    getAll:(req,res)=>{
        Feedback.find({})
        .populate("createdBy", "email") 
        .then((feedbacks)=>{
            res.status(200).json({feedbacks:feedbacks})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong getting all feedbacks", error:err})
        })
    },

    getOne:(req,res)=>{
        Feedback.findOne({_id:req.params.id})
        .then((feedback)=>{
            res.status(200).json({feedback:feedback})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong getting feedback", error:err})
        })
    },

    update:(req,res)=>{
        Feedback.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then((feedback)=>{
            res.status(200).json({updatedFeedback:feedback})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong updating feedback", error:err})
        })
    },
    
    delete:(req,res)=>{
        Feedback.deleteOne({_id:req.params.id})
        .then((feedback)=>{
            res.status(200).json({deletedFeedback:feedback})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong deleting feedback", error:err})
        })
    },

    findAllFeedbacksByUser: (req,res)=>{
        if(req.jwtpayload.email !== req.params.email){
            console.log("Not the user")
            User.findOne({email: req.params.email})
                .then((userNotLoggedIn)=>{
                    Feedback.find({createdBy: userNotLoggedIn._id})
                    .poplulate("createdBy", "email")
                    .then((allFeedbacksFromUser)=>{
                        console.log(allFeedbacksFromUser)
                        res.json(allFeedbacksFromUser)
                    })
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(400).json(err)
                })
        }
        else{
            console.log("Current user")
            console.log("req.jwtpayload.id:", req.jwtpayload.id)
            Feedback.find({ createdBy: req.jwtpayload.id})
            .populate("createdBy", "email")
            .then((allFeedbacksFromLoggedInUser)=>{
                console.log(allFeedbacksFromLoggedInUser)
                res.json(allFeedbacksFromLoggedInUser)
            })
            .catch((err)=>{
                console.log(err)
                res.status(400).json(err)
            })
        }
    }

}

module.exports = FeedbackController