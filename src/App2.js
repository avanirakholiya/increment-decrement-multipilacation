import React, { useState } from 'react'

export default function App2() {
    const [message,setMessage] = useState("Hello");
    const displayMessage = () => {
        alert("Message is: "+message);
    } 
    const setMessageItem = () =>{
        setMessage("Welcome");
    }
  return (
    <>
        <h1>{message}</h1>
        <button onClick={displayMessage}>Get Value</button>
        <button onClick={setMessageItem}>Set Value</button>
    </>
  )
}
