import React, {useRef,useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [custName,setCustName] = useState("")
  const [custEmail,setCustEmail] = useState("")
  const [custLocation,setCustLocation] = useState("")
  const [custConcerns,setCustConcerns] = useState("")
  const [errors,setErrors] = useState({})
  const [user, setUser] = useState({})

  const form = useRef()
  const SERVICE_ID = 'service_lac4n1r'
  const TEMPLATE_ID = "template_ss714zx"
  const PUBLIC_KEY = "rT9ADbm8dtXn-_HiW"

  const navigate = useNavigate()

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

const logout = (e)=>{
  axios.post("http://localhost:8000/api/users/logout",
  {}, // must have due to having a post request .. 
  {withCredentials:true})
  .then((res)=>{
      console.log(res)
      console.log(res.data)
      navigate("/")
  })
  .catch((err)=>{
      console.log(err)
  })
}

  const nameHandle = (e)=>{
    setErrors("")
    setCustName(e.target.value)
  }

  const emailHandle = (e)=>{
    setErrors("")
    setCustEmail(e.target.value)
  }

  const locationHandle = (e)=>{
    setErrors("")
    setCustLocation(e.target.value)
  }

  const concernsHandle = (e)=>{
    setErrors("")
    setCustConcerns(e.target.value)
  }

  const submitHandle = (e)=>{
    e.preventDefault()

    const feedback = {
      custName,
      custEmail,
      custLocation,
      custConcerns
    }
    axios.post("http://localhost:8000/api/feedbacks", feedback, {withCredentials:true})
    .then((feedback)=>{
      console.log(feedback)
    })
    .catch((err)=>{
      setErrors(err.response.data.error.errors)
    })

    emailjs
    .sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then(
      (res) => {
        console.log(res.text)
        console.log("msg sent")
      },
      (err) => {
        console.log(err.text)
      }
    )
  e.target.reset()

  }






  return (
    <div className ='contact-container'>
        <div className='left-col'>
            <h2>Contact us</h2>
            <p style={{wordWrap:'break-word'}}>sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj sfjsjfs jflkjsiewf wfsklflwe wefjdfdsjfjk dsfjkdsjjkdsjfksdj </p>
        </div>
        <form ref={form} className='contact-form' onSubmit={submitHandle}>
          <div className='right-col'>
              <input
              placeholder='Name'
              name="custName"
              type='text'
              value={custName}
              onChange={nameHandle}
              />

              <input
              placeholder='Email'
              name='custEmail'
              type='email'
              value={custEmail}
              onChange={emailHandle}
              />

              <input
              placeholder='Where are you from?'
              name='custLocation'
              type='text'
              value={custLocation}
              onChange={locationHandle}
              />

              <textarea 
              rows='5' cols='40'
              name = 'message'
              placeholder='Questions? Comments? Concerns?'
              value={custConcerns}
              onChange={concernsHandle}
              ></textarea>

              <div>
              <button>Submit</button>
              </div>
          </div>
        </form>
    </div>
  )
}

export default Contact