import "./LoginPage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const PERSON_KEY = "PersonKey";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (eventChange) => {
    setUsername(eventChange.target.value);
    localStorage.setItem(PERSON_KEY, JSON.stringify(username));
  };

  const handlePassword = (eventChange) => {
    setPassword(eventChange.target.value);
  };

  const handleSubmit = (eventChange) => {
    eventChange.preventDefault();
  };

  return (
    <div className="login_page">
      <h1 className="loginHeading">Login</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" value={username} onChange={handleUsername} />
          </label>
          <div>
            <label>
              Password&nbsp;
              <input
                //&nbsp;add space inline
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </label>
          </div>
          <button onSubmit={() => handleSubmit()}>
            <Link to="/songsgallery">Log in</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
