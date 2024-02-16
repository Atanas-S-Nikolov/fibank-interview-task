import "../styles/Login.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isBlank } from "underscore.string";
import { TABLE_URL } from "../constants/UrlConstants";
import { useDispatch } from "react-redux";
import { loginReducer } from "../redux/authSlice";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(isBlank(user.username) || isBlank(user.password))) {
      setButtonDisabled(false);
    }
  }, [user.username, user.password]);

  function resetUsernameErrorState() {
    setUsernameError(false);
    setUsernameErrorMessage("");
  }

  function resetPasswordErrorState() {
    setPasswordError(false);
    setPasswordErrorMessage("");
  }

  function handleUsernameChange(event) {
    event.preventDefault();
    resetUsernameErrorState();
    const { value } = event.target;
    setUser({ ...user, username: value });
    if (isBlank(value)) {
      setUsernameErrorMessage("Username is empty");
      setUsernameError(true);
      setButtonDisabled(true);
      return;
    }
  }

  function handlePasswordChange(event) {
    event.preventDefault();
    resetPasswordErrorState();
    const { value } = event.target;
    setUser({ ...user, password: value });
    if (isBlank(value)) {
      setPasswordErrorMessage("Password is empty");
      setPasswordError(true);
      setButtonDisabled(true);
      return;
    }
  }

  function login() {
    dispatch(loginReducer());
    navigate(TABLE_URL);
  }

  return (
    <div className="login_form">
      <div>
        <TextField
          id="username"
          label="Username"
          placeholder="Enter username"
          value={user.username}
          onChange={handleUsernameChange}
          error={usernameError}
          helperText={usernameErrorMessage}
          required
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={user.password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordErrorMessage}
          required
        />
      </div>
      <Button
        id="login_btn"
        variant="contained"
        disabled={buttonDisabled}
        onClick={login}
      >
        Login
      </Button>
    </div>
  );
}
