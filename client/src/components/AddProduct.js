import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'


const AddProduct = (props) => {
  const [productName,setProductName]=useState("")
  const [productPrice,setProductPrice]=useState("")
  const [productDescription,setProductDescription]=useState("")
  const [productImg,setProductImg]=useState("")
  const [errors,setErrors]= useState({})
  const {loggedIn, setLoggedIn}= props
  const navigate = useNavigate()

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

const handleSubmit= (e)=>{
  e.preventDefault()

  const product = {
      productName,
      productPrice,
      productDescription,
      productImg,
  }

  axios.post("http://localhost:8000/api/products",product)
  .then((product)=>{
      console.log(product)
      navigate("/")
  })
  .catch((error)=>{
      setErrors(error.response.data.errors)
      console.log(error.response.data.errors)
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
        <p className="">Add A Product</p>
        <br/>
            <form onSubmit={handleSubmit} className="formInputDiv">
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
                            <input className=""  type="text" onChange = {productPriceHandler} name="" id="" value={productPrice} />
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
                            <textarea className="" type="text" label="Type" onChange={productDescriptionHandelr} value={productDescription}></textarea>
                        </label>
                    </div> 
                    </div>     
                </div>    
                <br/>
                <div className="btndiv">
                    <button onClick={handleSubmit} type="submit" className = "btn hover">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddProduct