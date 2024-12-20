import { useState } from "react";
import "./RegisterPage.css";
import logo from "../assets/logo1.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleNewAccount = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="image-container">
      <img src={logo} width="200" height="120" />
      <div className="main-container">
        <form className="main-form">
          <div className="div-username">
            <label className="label-name">
              Your Name
              <br />
              <input
                className="main-input-username"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="div-email">
            <label className="label-email">
              Email
              <br />
              <input
                className="main-input-password"
                type="text"
                name="password"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
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
          <div className="div-password-confirm">
            <label className="label-password-confirm">
              Re-enter password
              <br />
              <input
                className="main-input-password"
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <br />
          <button
            className="confirm-button"
            type="submit"
            onClick={handleNewAccount}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};
