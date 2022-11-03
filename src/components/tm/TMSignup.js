import React, { useState } from "react";

function TMSignup() {
  const [errors, setErrors] = useState([]);
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  function handleTmSubmit(e) {
    e.preventDefault();
    const tmData = {
      name: validation.name,
      email: validation.email,
      phone: validation.phone,
      password: validation.password,
      confirm_password: validation.confirm_password,
    };

    console.log(tmData);

    fetch("https://enigmatic-woodland-61895.herokuapp.com/technical_mentor/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tmData),
    });
    setValidation("");

    if (validation.errors) {
      alert(validation.errors);
      setErrors(validation.errors);
      window.location.href = "/tm-signup";
    } else alert("You have successfully signed up!");
    window.location.href = "/tm-login";
  }

  function handleChange(event) {
    setValidation({
      ...validation,
      [event.target.name]: event.target.value,
    });
  }

  //

  return (
    <div>
      <form className="entry-form" onSubmit={handleTmSubmit}>
        <div className="entry-data">
          <span style={{ fontWeight: "bolder" }} className="summary-title">
            Signup
          </span>
          <div class="mb-3 mt-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={validation.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={validation.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={validation.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={validation.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={validation.confirm_password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button type="Submit" className="form-control btn-secondary">
              Signup
            </button>
            {/* have an account? signin */}
            <span className="mb-3">
              <a href="/tm-login">Already have an account? Signin</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TMSignup;
