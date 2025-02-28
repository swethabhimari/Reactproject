// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signIn, signUp, signInWithGoogle } from "../firebase/auth";
// import ".css"; // Import CSS

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Password Validation Function
//   const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   // Handle Login
//   const handleLogin = async () => {
//     try {
//       await signIn(email, password);
//       navigate("/Home"); // Redirect to Home Page after login
//     } catch (err) {
//       setError("Invalid Credentials! Try again.");
//     }
//   };

//   // Handle Signup
//   const handleSignup = async () => {
//     if (!isValidPassword(password)) {
//       setError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
//       return;
//     }

//     try {
//       await signUp(email, password);
//       navigate("/home"); // Redirect after signup
//     } catch (err) {
//       console.error("Signup Error:", err.message);
//       setError(err.message); // Show the actual error
//     }
// };


//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <button className="login-btn" onClick={handleLogin}>Login</button>
//       <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
//       <button className="google-btn" onClick={signInWithGoogle}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp, signInWithGoogle } from "../firebase/auth";
import "./App.css"; // Import CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigate("/home"); // Redirect after login
    } catch (err) {
      setError("Invalid Credentials! Try again.");
    }
  };

  const handleSignup = async () => {
    if (!isValidPassword(password)) {
      setError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/home"); // Redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="login-btn" onClick={handleLogin}>Login</button>
      <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
      <button className="google-btn" onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;

