import React, {useState} from "react";

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
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          // redirect to login
          alert("You have successfully logged in!");
          window.location.href = "/student";
        }
      });
  };

  return (
    <div>
      <form style={background} className="auth-form">
        <div className="auth-data">
          <span style={{ fontWeight: "bolder" }} className="center">
            Student login
          </span>
          <div class="mb-3 mt-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" name="email" onChange={handleChange} />
          </div>
          <div class="mb-3 mt-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" name="password" onChange={handleChange} />
          </div>
          <div class="mb-3">
            <button type="Submit" className="form-control btn-secondary" onClick={handleSubmit} >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
