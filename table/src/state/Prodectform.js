import React, { useState } from "react";

export default function Prodectform() {
  const [formdata, setFormdata] = useState({});
  const [array, setArray] = useState([]);

  const handleChange=(e)=>{
    setFormdata(()=>({...formdata,[e.target.id]:e.target.value}))
};
  

const arraydata=(e)=>{
  e.preventDefault();
  setArray([...array,formdata])
  setFormdata({
      productname:"",productquantity:"",productprice:"",
  })
  console.log(array);
}

  return (
    <>
      <h1>Product Form</h1>
      <form onSubmit={arraydata}>
        <label for="product-name">Product Name:</label>
        <input type="text" id="productname" name="product-name" required onChange={handleChange}value={formdata.productname}/>

        <label for="product-description">Quantity:</label>
        <input type="text" id="productquantity" name="product-name" onChange={handleChange}value={formdata.productquantity} />

        <label for="product-price">Price:</label>
        <input type="number" id="productprice" name="product-price" required onChange={handleChange} value={formdata.productprice}/>

        <label>Total Amount</label>
        <input type="number" id="total" onChange={handleChange} value={formdata.total}/>

        <button type="submit">Add Product</button>
      </form>
    <>
    
    
    </>
    </>
  );
}
