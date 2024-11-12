import { useState } from "react";

export default function State1() {
  const [formdata, setFormdata] = useState({});
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            onChange={(i)=>setFormdata({...formdata,[i.target.id]:i.target.value})}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="InputPassword1"
            onChange={(i)=>setFormdata({...formdata,[i.target.id]:i.target.value})}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" 
           onChange={(i)=>setFormdata({...formdata,[i.target.id]:i.target.value})}/>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <p>{formdata.InputEmail1 ? formdata.InputEmail1 : ""}</p>
      <p>{formdata.InputPassword1 ? formdata.InputPassword1: ""}</p>
      <p>{formdata.examplecheck1 ? formdata.examplecheck1 : ""}</p>
      <p>{formdata.phone ? formdata.phone : ""}</p>
    </>
  );
}
 