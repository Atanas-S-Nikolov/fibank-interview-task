import "../styles/ErrorPage.css";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../constants/UrlConstants";
import errorImage from "../assets/error-svgrepo-com.svg";

export default function ErrorPage({ error = "Something went wrong" }) {
  const navigate = useNavigate();

  function recoverFromError() {
    navigate(HOME_URL);
    console.clear();
  }

  return (
    <>
      <img id="error_image" src={errorImage} alt="Error image" />
      <Alert
        className="alert"
        severity="error"
        action={
          <Button id="reset_btn" color="error" onClick={recoverFromError}>
            Reset
          </Button>
        }
      >
        {error}. Try clicking the reset button to reload the application.
      </Alert>
    </>
  );
}
