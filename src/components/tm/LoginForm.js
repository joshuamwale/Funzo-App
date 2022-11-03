import React, { useState } from "react";

function LoginForm({ background }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // on change handler
  const handleChange = (e) => {
    setFormData({
      ...formData, // spread operator
      [e.target.name]: e.target.value,
    });
  };

  // on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    fetch("https://enigmatic-woodland-61895.herokuapp.com/technical_mentor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setErrors(data.error);
          window.location.href = "/tm-login";
        } else {
          localStorage.setItem("user", formData.email);
          alert("You have successfully logged in!");
          window.location.href = "/tm";
        }
      });
  };

  return (
    <div>
      <form style={background} className="auth-form" onSubmit={handleSubmit} >
        <div className="auth-data">
          <span style={{ fontWeight: "bolder" }} className="center">
            login
          </span>
          <div class="mb-3 mt-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3 mt-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <span className="text-danger">{errors}</span>
            <button
              type="Submit"
              className="form-control btn-secondary"
            >
              Login
            </button>
            <span className="mb-3">
              <a href="/tm-signup">Don't have an account? Sign up</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
