import { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="image-container">
      <img src={logo} width="200" height="120" />
      <div className="main-container">
        <form className="main-form">
          <div className="div-username">
            <label className="label-username">
              Email
              <br />
              <input
                className="main-input-username"
                type="text"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="div-password">
            <label className="label-password">
              Password
              <br />
              <input
                className="main-input-password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <br />
          <button className="login-button" type="submit" onClick={handleLogin}>
            Sign in
          </button>
          <br />
          <button
            className="create-account-button"
            type="submit"
            onClick={() => navigate("/register")}
          >
            Create MovieFinder account
          </button>
        </form>
      </div>
    </div>
  );
};
