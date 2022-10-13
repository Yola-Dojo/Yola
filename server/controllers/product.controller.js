const Product= require('../models/product.model')
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const ProductController = {

    create:(req,res)=>{

        const newProductObject = new Product(req.body);

        const decodedJWT = jwt.decode(req.cookies.usertoken,{
            complete:true
        })

        newProductObject.createdBy = decodedJWT.payload.id
    

        newProductObject.save(req.body)
        .then((product)=>{
            res.status(201).json({product:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong creating product", error:err})
        })
    },

    getAll:(req,res)=>{
        Product.find({})
        .populate("createdBy", "email") 
        .then((products)=>{
            res.status(200).json({products:products})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong getting all products", error:err})
        })
    },

    getOne:(req,res)=>{
        Product.findOne({_id:req.params.id})
        .then((product)=>{
            res.status(200).json({product:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong getting product", error:err})
        })
    },

    update:(req,res)=>{
        Product.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators:true})
        .then((product)=>{
            res.status(200).json({updatedProduct:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong updating product", error:err})
        })
    },
    
    delete:(req,res)=>{
        Product.deleteOne({_id:req.params.id})
        .then((product)=>{
            res.status(200).json({deletedProduct:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"something went wrong deleting product", error:err})
        })
    },

    findAllProductsByUser: (req,res)=>{
        if(req.jwtpayload.email !== req.params.email){
            console.log("Not the user")
            User.findOne({email: req.params.email})
                .then((userNotLoggedIn)=>{
                    Product.find({createdBy: userNotLoggedIn._id})
                    .poplulate("createdBy", "email")
                    .then((allProductsFromUser)=>{
                        console.log(allProductsFromUser)
                        res.json(allProductsFromUser)
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
            Product.find({ createdBy: req.jwtpayload.id})
            .populate("createdBy", "email")
            .then((allProductsFromLoggedInUser)=>{
                console.log(allProductsFromLoggedInUser)
                res.json(allProductsFromLoggedInUser)
            })
            .catch((err)=>{
                console.log(err)
                res.status(400).json(err)
            })
        }
    }

}

module.exports = ProductController