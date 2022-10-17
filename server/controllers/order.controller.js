const Order= require('../models/order.model')
const User = require("../models/user.model")

const jwt = require("jsonwebtoken");

const OrderController = {
    create:(req,res)=>{

        const newOrderObject = new Order(req.body);

        const decodedJWT = jwt.decode(req.cookies.usertoken,{
            complete:true
        })

        newOrderObject.createdBy = decodedJWT.payload.id

        newOrderObject.save(req.body)
        .then((order)=>{
            res.status(201).json({order:order})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong creating order", error:err})
        })
    },

    getAll:(req,res)=>{
        Order.find({})
        // .populate("createdBy", "email") 
        .then((orders)=>{
            res.status(200).json({orders:orders})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong getting all orders", error:err})
        })
    },

    getOne:(req,res)=>{
        Order.findOne({_id:req.params.id})
        .then((order)=>{
            res.status(200).json({order:order})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong getting order", error:err})
        })
    },

    update:(req,res)=>{
        Order.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then((order)=>{
            res.status(200).json({updatedOrder:order})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong updating order", error:err})
        })
    },
    
    delete:(req,res)=>{
        Order.deleteOne({_id:req.params.id})
        .then((order)=>{
            res.status(200).json({deletedOrder:order})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong deleting order", error:err})
        })
    },

    findAllOrdersByUser: (req,res)=>{
        if(req.jwtpayload.email !== req.params.email){
            console.log("Not the user")
            User.findOne({email: req.params.email})
                .then((userNotLoggedIn)=>{
                    Order.find({createdBy: userNotLoggedIn._id})
                    .poplulate("createdBy", "email")
                    .then((allOrderFromUser)=>{
                        console.log(allOrdersFromUser)
                        res.json(allOrdersFromUser)
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
            Order.find({ createdBy: req.jwtpayload.id})
            .populate("createdBy", "email")
            .then((allOrdersFromLoggedInUser)=>{
                console.log(allOrdersFromLoggedInUser)
                res.json(allOrdersFromLoggedInUser)
            })
            .catch((err)=>{
                console.log(err)
                res.status(400).json(err)
            })
        }
    }

}

module.exports = OrderController