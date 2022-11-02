import React from "react";
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div className="landing-page" >
      {/* button for signup as TM */}
        <Link to="/tm-signup">
            <button className="btn btn-dark">Sign up as TM</button>
        </Link>
        {/* button for signup as student */}
        <Link to="/student-signup">
            <button className="btn btn-dark">Sign up as Student</button>
        </Link>
    </div>
  );
}

export default LandingPage;