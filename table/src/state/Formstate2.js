
import React, { useState } from "react";

export default function Formstate2() {
  const [formdata, setFormdata] = useState({});
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setFormdata((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true)
    console.log(formdata);
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit} class="mb-4">
        <div class="mb-3">
          <label for="name" class="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.name}
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.email}
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.password}
          />``
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            class="form-control"
            required
            onChange={handleChange}
            value={formdata.phone}
          />
        </div>

        <button type="submit" id="button" class="btn btn-primary">
          Register
        </button>
      </form>
      {status ?<>
        <p>Name:{formdata.name}</p>
      <p>Phone{formdata.phone}</p>
      <p>Email:{formdata.email}</p>
      <p>Password:{formdata.password}</p></> :""}
     

    </div>
  );
}
