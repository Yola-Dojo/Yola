import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

const form = useRef()
const SERVICE_ID = "service_lac4n1r"
const TEMPLATE_ID = "template_ss714zx"
const PUBLIC_KEY = "rT9ADbm8dtXn-_HiW"
// I don't think these need to be private...

const sendEmail = (e) => {
    e.preventDefault()

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
    <div>
      <p>Questions? Comments? Send us an email!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <input type="text" name="user_name" />
        <label>Email: </label>
        <input type="email" name="user_email" />
        <label>Message: </label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
      <p>For your privacy, we never use contact information for marketing purposes.</p>
    </div>
  )
}

export default Contact