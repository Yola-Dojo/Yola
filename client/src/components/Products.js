import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Navigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


const Products = (props) => {
    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productDescription,setProductDescription]= useState("")
    const [productImg,setProductImg]=useState("")
    const [productQuantity,setProductQuantity]=useState({})
    const [errors,setErrors]= useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    const [products, setProducts]= useState([])
    const [productList, setProductList] = useState("")
    //const [order,setOrder] = ({})

    const {userInfo, setUserInfo} = props;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            console.log(res.data.products)
            setProducts(res.data.products)
            console.log(userInfo)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    },[productList])

    const productQuantityHandler=(e)=>{
        setErrors("")
        setProductQuantity(e.target.value)

    }
    //console.log(productQuantity)
    const handleSubmit= (e,item)=>{
        e.preventDefault()
        //console.log(item)
        const order = {
            productName:item.productName,
            productPrice:item.productPrice,
            productDescription:item.productDescription,
            productImg:item.productImg,
            productQuantity
        }
        //console.log(order)
        axios.post("http://localhost:8000/api/orders",order,{withCredentials:true})
        .then((order)=>{
            console.log(order)
            navigate("/checkout")
        })
        .catch((error)=>{
            //setErrors(error.response.data.errors)
            //console.log(error.response.data.errors)
        })
    }
return (
    <div>
        <div className="tableDiv">
            <div className="products-div" >
                <form className="products-div" >
                {
                    products.map((item,idx1)=>( 
                    <div key={idx1}>
                            <div className="card hover" style={{backgroundImage:`url(${item.productImg})`,backgroundSize:"cover"}}></div>
                            <div>
                                <p>{item.productName} </p>
                                <p>${item.productPrice}</p>
                                <p> {item.productDescription}</p>
                                <label>Quantity:</label>
                                <input type="number" min="1" max="100" onChange={productQuantityHandler} /><br/><br/>
                            </div>
                                <button type="button" className="btn-2 formbtn" onClick={(e)=>handleSubmit(e,item)}>Add To Cart</button><br/><br/>                                
                    </div>  
                        ))
                }
                </form>    
            </div>
        </div>
    </div>
)

}

export default Products