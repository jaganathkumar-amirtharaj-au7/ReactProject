import React, { useState } from "react";
import "./Login.css";
import Logo from "./newlogo.png";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { auth, db, storage } from "./firebase";
import bglogin from "./background-login.png"
function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var sectionStyle = {
    
    height: "100vh",
    backgroundImage: "url(" + { bglogin } + ")"
  };
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        if (
          err.messege ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check the credentials again");
        } else if (
          err.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert("Please check the credentials again");
        } else {
          alert(err.message);
        }
      });
  };
  return (
    <div className="login">
      <img src={Logo} alt="Company Logo" className="login__logo" />

      <div className="login__container" >
        <center>
          <h2 style={{ color: "#b41515" }}>Log In To WeShare</h2>
        </center>

        <form>
          <center className="inputs">
            <TextField
              type="email"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center className="inputs">
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center className="inputs">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className="login__button"
              onClick={login}
            >
              Log In
            </Button>
          </center>
          <center className="login__bottom">
            <h5>Forgotten Password ?</h5>
            <h5 className="dot">.</h5>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <h5 className="rtd"> Sign Up For WeShare</h5>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
