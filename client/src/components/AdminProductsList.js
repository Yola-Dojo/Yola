import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Navigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


const AdminProductsList = (props) => {
    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productDescription,setProductDescription]= useState("")
    const [productImg,setProductImg]=useState("")
    const [errors,setErrors]= useState({})
    const {loggedIn, setLoggedIn}= props
    const navigate = useNavigate()
    const {id} = useParams();
    const [users, setUsers] = useState([])
    const [products, setProducts]= useState([])
    const [productList, setProductList] = useState("")
    const [usersList, setUsersList] = useState("")
    const {user,setUser}= props
    

    useEffect(()=>{
        // !user && navigate("/login")
        axios.get('http://localhost:8000/api/products',{withCredentials:true})
        .then((res)=>{
            console.log(res.data.products)
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    },[productList])

    useEffect(()=>{
        // !user && navigate("/login")
        axios.get('http://localhost:8000/api/users/getAllUsers',{withCredentials:true})
        .then((res)=>{
            console.log(res.data.users)
            setUsers(res.data.users)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    },[usersList])

    const productDeleteHandler = (idx1,pid) => {
        axios.delete(`http://localhost:8000/api/products/${pid}`)
            .then((res) => {
            console.log(res.data)
            setProductList("refresh")
            window.location.reload(false);

            })
            .catch((err) => console.log(err))
    }

    const userDeleteHandler = (uid) => {
        axios.delete(`http://localhost:8000/api/users/${uid}`)
            .then((res) => {
            console.log(res.data)
            setUsersList("refresh")
            window.location.reload(false);

            })
            .catch((err) => console.log(err))
    }
return (
    <div className="container">
            <h2 className="text-indigo-600 text-2xl"> ALL ORDERS</h2>    
        <div className="tableDiv">
            <table className="table-1">
                <tbody >
                    <tr>
                        <th className="text-indigo-600">PRODUCT NAME</th>
                        <th className="text-indigo-600">PRODUCT PRICE</th>
                        <th className="text-indigo-600">PRODUCT DESCRIPTION</th>
                        <th className="text-indigo-600">PRODUCT IMAGE</th>
                        <th className="text-indigo-600">ACTIONS</th>
                    </tr>
                    {
                        products.map((item,idx1)=>(  
                            <tr key={idx1}>
                                <td className="text-indigo-600">{item.productName}</td>
                                <td className="text-indigo-600">{item.productPrice}</td>
                                <td className="text-indigo-600">{item.productDescription}</td>
                                <td>     
                                    <div className="card hover" style={{backgroundImage:`url(${item.productImg})`,backgroundSize:"contain", backgroundRepeat:'no-repeat', backgroundPositionX:"center"}}></div>
                                </td>
                                <td>
                                    <button className="px-8 py-4 rounded-md text-lg font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-300 active:bg-purple-700 focus:ring-purple-300" onClick={()=>productDeleteHandler(idx1,item._id)}>Delete</button>
                                    <button className="px-8 py-4 rounded-md text-lg font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-300 active:bg-purple-700 focus:ring-purple-300" onClick={()=>navigate(`/admin/edit/${item._id}`) }>Edit</button>                                   
                                </td>
                            </tr>
                                    ))
                    }
                </tbody>  
            </table>
        </div>
        <h2 className="text-indigo-600 text-2xl"> ALL USERS</h2>    
        <div className="tableDiv">
            <table>
                <tbody>
                    <tr>
                        <th className="text-indigo-600">USER</th>
                        <th className="text-indigo-600">ACTIONS</th>
                    </tr>
                    {
                        users.map((item,idx)=>(  
                            <tr key={idx}>
                                <td className="text-indigo-600">{item.firstName} {item.lastName}</td>
                                <td>
                                    <button  className="px-8 py-4 rounded-md text-lg font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-300 active:bg-purple-700 focus:ring-purple-300" onClick={()=>userDeleteHandler(item._id)} >Delete</button>                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>  
            </table>
        </div>
    </div>
)
}

export default AdminProductsList