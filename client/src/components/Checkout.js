
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Navigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Checkout = (props) => {

    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productDescription,setProductDescription]= useState("")
    const [productImg,setProductImg]=useState("")
    const [productQuantity,setProductQuantity]=useState({})
    const [errors,setErrors]= useState({})
    const {loggedIn, setLoggedIn}= props
    const navigate = useNavigate()
    const {id} = useParams();
    const [users, setUsers] = useState([])
    const [products, setProducts]= useState([])
    const [orderList, setOrderList] = useState("")
    const [usersList, setUsersList] = useState("")
    const [orders,setOrders] = useState([])
    const {user, setUser} = props
    const {userInfo, setUserInfo} = props;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/orders',{withCredentials:true})
        .then((res)=>{
            console.log(res.data.orders)
            setOrders(res.data.orders)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    },[orderList])


    const orderDeleteHandler = (idx1,pid) => {
        axios.delete(`http://localhost:8000/api/orders/${pid}`)
            .then((res) => {
            console.log(res.data)
            setOrderList("refresh")
            window.location.reload(false);

            })
            .catch((err) => console.log(err))
    }

    const loggedInUserOrders = orders.filter(val =>val.createdBy === userInfo.userId)
    //console.log(loggedInUserOrders)
    

    const itemsPrice = loggedInUserOrders.reduce((a, c) => a + c.productQuantity * c.productPrice, 0);
    const taxPrice = itemsPrice * 0.0725;
    const totalPrice = itemsPrice + taxPrice;

return (
    <div className="tableDiv">
    <table className="table-1">
        <tbody >
            <tr>
                <th>PRODUCT NAME</th>
                <th>PRODUCT PRICE</th>
                <th>PRODUCT IMAGE</th>
                <th>PRODUCT Quantity</th>
                <th>ACTIONS</th>
            </tr>
            {
                loggedInUserOrders.map((item,idx1)=>(  
                    <tr key={idx1}>
                        <td>{item.productName}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.productDescription}</td>
                        <td>{item.productQuantity}</td>
                        <td>     
                            <div className="card hover" style={{backgroundImage:`url(${item.productImg})`,backgroundSize:"cover"}}></div>
                        </td>
                        <td>
                            <button className="edit-page-btns btn-1" onClick={()=>orderDeleteHandler(idx1,item._id)}>Delete</button>
                            {/* <button className="btn-2 formbtn" onClick={()=>navigate(`/admin/edit/${item._id}`) }>Edit</button>                                    */}
                        </td>
                    </tr>
                ))
            }
        </tbody>  
    </table>
    <aside className="aside">
        <h2>Cart Items</h2>
        <div>
            {loggedInUserOrders.length === 0 && <div> Cart is Empty</div>}
            {loggedInUserOrders.map((item) =>
            <div className="">
                {item.productQuantity} x ${item.productPrice.toFixed(2)}
            </div>

        )}
            <p>{loggedInUserOrders.length} Products</p>
            <p>Total: {totalPrice}</p>
        </div>
    </aside>

</div>
)
}

export default Checkout