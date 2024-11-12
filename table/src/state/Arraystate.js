import React,{ useEffect, useState } from "react";

export default function Arraystate(){
    const [formdata,setFormdata]=useState({})
    const [array,setArray]=useState([])

    const newchage=(e)=>{
        setFormdata(()=>({...formdata,[e.target.id]:e.target.value}))
    };
    const arraydata=(e)=>{
        e.preventDefault();
        setArray([...array,formdata])
        setFormdata({
            title:"",img:"",para:""
        })
        console.log(array);
    }

    return(
        <>
        <form onSubmit={arraydata}>
        <label>image:</label>
        <input type="text" id="img"  onChange={newchage} value={formdata.img}/>
        <label>Title:</label>
        <input type="text" id="title" required onChange={newchage} value={formdata.title}/>
        <label>description</label>
        <input type="text" id="para"  onChange={newchage} value={formdata.para}/>
        <button>submit</button>
        </form>
     <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto",marginTop:"15px",gap:"10px"}}>
     {array&&array.map((a)=>
     <>
    <div style={{width:"210px",border:"1px solid black"}}>
    <img src={a.img} width={200} height={200}/>
    <h5>title:{a.title}</h5>
    <p>description:{a.para}</p>
    </div>
     </>
    )}
    </div>

     </>
    )}   