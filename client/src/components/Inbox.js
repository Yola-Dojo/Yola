import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Inbox = () => {

    const [inboxList,setInboxList] = useState([])
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users", {withCredentials:true})
            .then((res)=>{
                console.log(res.data)
                setUser(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/feedbacks`)
        .then((res)=>{
            console.log(res)
            setInboxList(res.data.feedbacks)
        })
        .catch((err)=>{
            console.log("AAAAAAA", err)
        })
    
    }, [])

    const deleteHandle =(id)=>{
        axios.delete(`http://localhost:8000/api/feedbacks/${id}`)
        .then((res)=>{
            console.log(res)
            setInboxList(inboxList.filter((message)=>message._id !== id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <div>
            <h2>Messages</h2>
        </div>
        <div>
            {
                inboxList.map((item,index)=>(
                    <div key={index}className = 'inbox-list'>
                        <div className='inbox-left'>
                            <p>{item.custEmail}</p>
                            <p>Name: {item.custName}</p>
                        </div>
                        <div className='inbox-right'>
                            <p><Link to = {"#"}>View</Link></p>
                            <button className='inbox-btn' onClick={()=>deleteHandle(item._id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Inbox