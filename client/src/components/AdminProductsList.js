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
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
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
        axios.get('http://localhost:8000/api/users/getAllUsers')
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

    const userDeleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
            setUsersList("refresh")
            setProductList("refresh")
            setUsers(users)
            console.log(res.data)
            window.location.reload(false);

            })
            .catch((err) => console.log(err))
    }

return (
    <div className="container">
            <h2> ALL ORDERS</h2>    
        <div className="tableDiv">
            <table >
                <tbody className="">
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT PRICE</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>PRODUCT IMAGE</th>
                        <th>ACTIONS</th>
                    </tr>
                    {
                        products.map((item,idx1)=>(  
                            <tr key={idx1}>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td>{item.productDescription}</td>
                                <td>     
                                    <div className="card hover" style={{backgroundImage:`url(${item.productImg})`,backgroundSize:"cover"}}></div>
                                </td>
                                <td>
                                    <button className="edit-page-btns btn-1" onClick={()=>productDeleteHandler(idx1,item._id)}>Delete</button>
                                    <button className="btn-2 formbtn" onClick={()=>navigate(`/admin/edit/${item._id}`) }>Edit</button>                                   
                                </td>
                            </tr>
                                    ))
                    }
                </tbody>  
            </table>
        </div>
        <h2> ALL USERS</h2>    
        <div className="tableDiv">
            <table>
                <tbody>
                    <tr>
                        <th>USER</th>
                        <th>ACTIONS</th>
                    </tr>
                    {
                        users.map((item,idx)=>(  
                            <tr key={idx}>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>
                                    <button className="edit-page-btns btn-1" onClick={userDeleteHandler}>Delete</button>                                    
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