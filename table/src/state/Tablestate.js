import React, { useState } from "react";
export default function Tablestate() {
  const [formdata, setFromdata] = useState({});
  const [array, setArray] = useState([]);
  let [edit,setEdit]=useState(false)

  const newchage = (i) => {
    setFromdata(() => ({ ...formdata, [i.target.id]: i.target.value }));
  };

  const arraydata = (i) => {
    i.preventDefault();
    if(edit){
      setArray(array.map((val)=>val.partName === formdata.partName?formdata:val))
      setEdit(false)
    }else{
      setArray([...array, formdata]);
    }
  
    setFromdata({
      partName: "",
      partType: "",
      model: "",
      specs: "",
      quantity: "",
    });
    console.log(array);
  };
  function handledelete(model) {
    setArray(array.filter((item) => item.partName !== model));
  }

  function handleEdit(model) {
    setFromdata(array.filter((item) => item.partName === model)[0]);
    setEdit(true)
  }
  return (
    <>
    <h1 className="text-center">Product information</h1>
      <form onSubmit={arraydata}>
        <label for="partName" className="form-label">Company Name:</label>
        <input
          type="text"
          className="form-control"
          id="partName"
          name="partName"
          required
          onChange={newchage}
          value={formdata.partName}
        />

        <label for="partType" className="form-label">Part Type:</label>
        <select
          id="partType"
           className="form-control"
          name="partType"
          required
          onChange={newchage}
          value={formdata.partType}
        >
          <option value="motherboard" >Motherboard</option>
          <option value="cpu">CPU</option>
          <option value="gpu">GPU</option>
          <option value="ram">RAM</option>
          <option value="psu">Power Supply Unit</option>
          <option value="ssd">Storage Drive</option>
        </select>

        <label for="model" className="form-label">Model:</label>
        <input
          type="text"
          id="model"
           className="form-control"
          name="model"
          required
          onChange={newchage}
          value={formdata.model}
        />

        <label for="specs" className="form-label">Specifications:</label>
        <input
          type="text"
          id="specs"
           className="form-control"
          name="specs"
          required
          onChange={newchage}
          value={formdata.specs}
        />

        <label for="quantity"  className="form-label">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
           className="form-control"
          min="1"
          required
          onChange={newchage}
          value={formdata.quantity}
        />

        <button type="submit" className="btn btn-primary m-3">Submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Part Name</th>
            <th>Part Type</th>
            <th>Model</th>
            <th>Specifications</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              <td>{item.partName}</td>
              <td>{item.partType}</td>
              <td>{item.model}</td>
              <td>{item.specs}</td> 
              <td>{item.quantity}</td>
              <td><a
                className="btn btn-danger"
                onClick={() => handledelete(item.partName)}
              >
                delete
              </a>
              <a className="ms-2 btn btn-warning"  onClick={() => handleEdit(item.partName)}>update</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
