import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,Link, useParams, } from 'react-router-dom'


const EditProduct = (props) => {

    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productDescription,setProductDescription]= useState("")
    const [productImg,setProductImg]=useState("")
    const [errors,setErrors]= useState({})
    const {loggedIn, setLoggedIn}= props
    const navigate = useNavigate()
    const {id} = useParams();
    const [products, setProducts]= useState([])



    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products/'+id)
        .then((res)=>{
            //console.log(res.data);
            setProductName(res.data.product.productName);
            setProductPrice(res.data.product.productPrice);
            setProductDescription(res.data.product.productDescription)
            setProductImg(res.data.product.productImg)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[products])

    const productNameHandler=(e)=>{
        setErrors("")
        setProductName(e.target.value)
    }
    
    const productPriceHandler=(e)=>{
        setErrors("")
        setProductPrice(e.target.value)
        }
        const productDescriptionHandelr=(e)=>{
        setErrors("")
        setProductDescription(e.target.value)
        }
        const ProductImgHandler=(e)=>{
        setErrors("")
        setProductImg(e.target.value)
        }
        
        const editHandler=(e)=>{
            e.preventDefault();
            axios.put('http://127.0.0.1:8000/api/products/' + id,{
                productName,
                productPrice,
                productImg,
                productDescription
                })
                .then((product)=>{
                    console.log(product.data);
                    navigate('/admin');
                })
                .catch((err)=>{
                    console.log(err.response.data.error.errors)
                    setErrors(err.response.data.error.errors)
                })
                } 
        
    return (
        <div>
        <div className="container">
            <div className="">
            <div className="logo-header-div">
                <div class="logo"></div>
            </div> 
                <div className="topLinks">
                    <div className="top">   
                    </div>
                </div>
            </div>
            <div className="container">
            <p className="">Edit Product</p>
            <br/>
                <form onSubmit={editHandler} className="formInputDiv">
                <div className="">
                        <div className="">
                        <div className="">
                            <label className="">Product Name:
                                {errors.productName ? <p>{errors.productName.message}</p>:null}
                                <input className="" type="text" onChange = {productNameHandler} name="" id="" value={productName} />
                            </label>
                        </div>
                        <div className="">
                            <label className="">Product Price:
                                {errors.productPrice ? <p>{errors.productPrice.message}</p>:null}
                                <input className=""  type="text" onChange = {productPriceHandler} name="" id="" value={productPrice}  />
                            </label>
                        </div>
                        <div className="">   
                            <label className="">Product Image:
                                {errors.productImg ? <p>{errors.productImg.message}</p>:null}
                                <input className="" type="text" label="Type" onChange={ProductImgHandler} value={productImg} />
                            </label>
                        </div>    
                        <div className=""> 
                            <label className="">Product Description:
                                {errors.productDescription ? <p>{errors.productDescription.message}</p>:null}
                                <textarea className="" type="text" label="Type" onChange={productDescriptionHandelr} value={productDescription} ></textarea>
                            </label>
                        </div> 
                        </div>     
                    </div>    
                    <br/>
                    <div className="btndiv">
                        <button onClick={editHandler} type="submit" className = "btn hover">UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
    }

export default EditProduct