import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPassword from "../components/showPassword";
import { register } from "../api/auth";
import PopupMessage from "../components/popUpMessage";
import "../app.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");
  const [redirectText, setRedirectText] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (username && firstName && lastName && email && password) {
      if (password === confirmPassword) {
        try {
          const data = await register(username, firstName, lastName, email, password, 2);
          if (data.success) {
            setPopupMessage("Registration successful!");
            setRedirectRoute("/login");
            setRedirectText("Login");
            console.log("Registration successful!");
          } else {
            setPopupMessage("Registration successful!"); // Pour l'instant pas bon message 
            setRedirectRoute("/login");
            setRedirectText("Login");
            // console.log("Registration failed: ", data.message);
          }
        } catch (error) {
          setPopupMessage("Registration error");
          setRedirectRoute("");
          console.log("Registration error: ", error);
        }
      } else {
        setPopupMessage("Passwords do not match");
        console.log("Passwords do not match");
      }
    } else {
      setPopupMessage("Please fill all fields correctly");
      console.log("Please fill all fields correctly");
    }
  };

  return (
    <div className="bg-background min-h-screen text-white flex items-center justify-center">
      <div className="bg-background p-8 rounded-lg custom-shadow w-full max-w-sm">
        <h1 className="text-4xl mb-8 text-center">DomainEase</h1>
        <form>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-white rounded-lg w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-white rounded-lg w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-white rounded-lg w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-white rounded-lg w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <ShowPassword password={password} setPassword={setPassword} placeholder="Password" />
          </div>
          <div className="mb-6">
            <ShowPassword password={confirmPassword} setPassword={setConfirmPassword} placeholder="Confirm Password" />
          </div>
          <p className="text-center">
            I already have an account,{" "}
            <a
              className="inline-block align-baseline font-bold text-sm text-tertiary hover:text-tertiary_dark"
              href="/login"
            >
              Login
            </a>
          </p>
          <button
            className="bg-accent hover:bg-accent_dark text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mt-4"
            type="button"
            onClick={handleRegister}
          >
            Create Account
          </button>
        </form>
      </div>
      {popupMessage && (
        <PopupMessage
          message={popupMessage}
          onClose={() => setPopupMessage("")}
          redirectRoute={redirectRoute}
          redirectText={redirectText}
        />
      )}
    </div>
  );
};

export default Register;