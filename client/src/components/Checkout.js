
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

                <th className='text-3xl text-indigo-600'>NAME</th>
                <th className='text-3xl text-indigo-600'>PRICE</th>
                <th className='text-3xl text-indigo-600'>DETAILS</th>
                <th className='text-3xl text-indigo-600'>QTY</th>
                <th className='text-3xl text-indigo-600'>ACTIONS</th>
            </tr>
            {
                loggedInUserOrders.map((item,idx1)=>(  
                    <tr key={idx1}>

                        <td className='text-3xl text-indigo-600'>{item.productName}</td>
                        <td className='text-3xl text-indigo-600'>{item.productPrice}</td>
                        <td className='text-3xl text-indigo-600'>{item.productDescription}</td>
                        <td className='text-3xl text-indigo-600'>{item.productQuantity}</td>
                        <td>     
                            <div className="card hover" style={{backgroundImage:`url(${item.productImg})`,backgroundSize:"cover"}}></div>
                        </td>
                        <td>
                            <button className="px-8 py-4 rounded-md text-lg font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-300 active:bg-purple-700 focus:ring-purple-300 text-3xl" onClick={()=>orderDeleteHandler(idx1,item._id)}>Delete</button>

                            {/* <button className="btn-2 formbtn" onClick={()=>navigate(`/admin/edit/${item._id}`) }>Edit</button>                                    */}
                        </td>
                    </tr>
                ))
            }
        </tbody>  
    </table>
    <aside className="aside">
        <h2 className="text-2xl">Cart Items</h2>
        <div>
            {loggedInUserOrders.length === 0 && <div> Cart is Empty</div>}
            {loggedInUserOrders.map((item) =>
            <div className="text-xl">
                {item.productQuantity} x ${item.productPrice.toFixed(2)}
            </div>

        )}
            <p>{loggedInUserOrders.length} Products</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button style={{backgroundColor:'black', color: 'white', padding:'3px 5px', width:'100px'}}>Checkout</button>
        </div>
    </aside>

</div>
)
}

export default Checkout