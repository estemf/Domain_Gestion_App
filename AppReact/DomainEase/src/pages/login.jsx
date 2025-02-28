import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPassword from "../components/showPassword";
import { login } from "../api/auth";
import "../app.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const data = await login(username, password);
        if (data.token) {
          // Stocker le jeton JWT si nécessaire
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);

          navigate("/");
        } else {
          alert('Login failed');
        }
      } catch (error) {
        alert('Login error');
      }
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
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <ShowPassword password={password} setPassword={setPassword} />
          </div>
          <p className="text-center">
            I don't have an account,{" "}
            <a
              className="inline-block align-baseline font-bold text-sm text-tertiary hover:text-tertiary_dark"
              href="#"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </a>
          </p>
          <button
            className="bg-accent hover:bg-accent_dark text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mt-4"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;