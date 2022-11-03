import React, { useState, useEffect } from "react";

function StudentSignup() {
  const [errors, setErrors] = useState([]);

  const [validations, setValidations] = useState({
    name: "",
    email: "",
    phone: "",
    cohort_id: "",
    image: "",
    password: "",
    password_confirmation: "",
  });

  // on change handler
  const handleChange = (e) => {
    setValidations({
      ...validations, // spread operator
      [e.target.name]: e.target.value,
    });
  };

  // on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: validations.name,
      email: validations.email,
      phone: validations.phone,
      cohort_id: validations.cohort_id,
      password: validations.password,
      password_confirmation: validations.password_confirmation,
    };

    fetch("https://enigmatic-woodland-61895.herokuapp.com/student/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          setErrors(data.error);
          window.location.href = "/student-signup";
        } else {
          // redirect to login
          alert("You have successfully signed up!");
          window.location.href = "/student-login";
        }
      });
  };

  // fetch cohorts
  const [studentscohort, setStudentsCohort] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-woodland-61895.herokuapp.com/cohorts")
      .then((r) => r.json())
      .then((response) => {
        setStudentsCohort(response);
      });
  }, []);

  return (
    <div>
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-data">
          <span style={{ fontWeight: "bolder" }} className="summary-title">
            Signup
          </span>
          <div class="mb-3 mt-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={validations.name}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={validations.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={validations.phone}
              onChange={handleChange}
            />
          </div>
          {/* cohort_id*/}
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">
              Module:
            </label>
            <select
              className="form-control"
              name="cohort_id"
              value={validations.cohort_id}
              onChange={handleChange}
            >
              {Array.from(studentscohort).map((cohort) => (
                <option key={cohort.id} value={cohort.id}>
                  {cohort.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={validations.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              value={validations.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <span className="text-danger">{errors}</span>I
            <button type="Submit" className="form-control btn-secondary">
              Submit
            </button>
            {/* have an account? signin */}
            <span className="mb-3">
              <a href="/student-login">Already have an account? Signin</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentSignup;
