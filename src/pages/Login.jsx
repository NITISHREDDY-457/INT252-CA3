import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  // State to manage form inputs and authentication status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here, you can add your login logic
    if (email === "uyyala@gmail.com" && password === "password123") {
      // Simulating successful login, you can replace this with actual login logic
      console.log("Login successful");
      // Set loggedIn to true to indicate user is logged in
      setLoggedIn(true);
    } else {
      // Simulating failed login, you can replace this with actual error handling logic
      setError("Invalid email or password");
    }
    // Reset form fields after submission (optional)
    setEmail("");
    setPassword("");
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    // For simplicity, we'll just set loggedIn to false
    localStorage.removeItem("userData");

    setLoggedIn(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                {/* Conditional rendering based on authentication status */}
                {loggedIn ? (
                  <button
                    className="my-2 btn btn-dark"
                    onClick={handleLogout} // Call handleLogout function on click
                  >
                    Logout
                  </button>
                ) : (
                  <button className="my-2 btn btn-dark" type="submit">
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
