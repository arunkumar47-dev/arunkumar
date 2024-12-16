import React, { useState, useEffect } from "react";
export default function Tittlestate() {
  const[repalce,setRepale]=useState("")
  const[array,setArray]=useState([])
  const[loop,setLoop]=useState([])

  const handlechange=(e)=>{
      setRepale(e.target.value)
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      setArray([...array,repalce])
      setRepale("")
  }
  useEffect(()=>{
      console.log(array)
       array.forEach((item)=>
      {
          let text=item.replace("@gmail.com","")
          setLoop([...loop,text])

      })

  },[array]
  )

  return (
    <>
      <form>
      <label>email</label>
      <input type="email" onChange={handlechange}/>
      <button onClick={handleSubmit}>submit</button>

        </form>

     {loop.map((v)=>
     <p>{v}</p>

    )}    
    </>
  );
}
