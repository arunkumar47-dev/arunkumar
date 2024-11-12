import { useState } from "react";

export default function StateUse({}) {
  const [formdata, setFormdata] = useState({});

  return (
    <>
      <form>
        <input
          type="text"
          id="name"
          onChange={(e) => setFormdata({ ...formdata, [e.target.id]: e.target.value })}
        />
           <input
          type="text"
          id="phone"
          onChange={(e) => setFormdata({ ...formdata, [e.target.id]: e.target.value })}
        />
           <input
          type="email"
            id= "email"
          onChange={(e) => setFormdata({ ...formdata, [e.target.id]: e.target.value })}
        />
           <input
          type="text"
          id="age"
          onChange={(e) => setFormdata({ ...formdata, [e.target.id]: e.target.value })}
        />
           <input
          type="text"
          id="address"
          onChange={(e) => setFormdata({ ...formdata, [e.target.id]: e.target.value })}
        />
        <input type="submit" />
      </form>
      <p>{formdata.name ? formdata.name : ""}</p>
      <p>{formdata.email ? formdata.email : ""}</p>
      <p>{formdata.age ? formdata.age : ""}</p>
      <p>{formdata.phone ? formdata.phone : ""}</p>

    </>
  );
}
