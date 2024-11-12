import { useState } from "react";


export default function Namestate(){
  const[name,setName]=useState("");
return(
    <>
    <form>
      <input typr="text" id="name" onChange={(i)=>{onnamechange(i)}} value={name}/>
    </form>
    
    </>
)
}