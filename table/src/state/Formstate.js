import { useState } from "react";


export default function Formstate() {
  const [formdata, setFormdata] = useState({});
  return (
    <>
      <form>
        <label for="name" id="no1">Name:</label>
        <input type="text" id="name" name="name" required 
        onChange={(i)=>setFormdata({...formdata,Formstate,[i.target.id]:i.target.value})}/>
        <label for="phone" id="no2">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="[6-9]{1}[0-9]{9}"
          placeholder="1234567890"
          onChange={(i)=>setFormdata({...formdata,[i.target.id]:i.target.value})}/>
        <input type="submit" value="Submit" />
      </form>
      <p>name:{formdata .name ? formdata.name : ""}</p>
      <p>phonenumbar:{formdata.phone ? formdata.phone: ""}</p>
    </>
  );
}
