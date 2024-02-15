import '../styles/ErrorPage.css';

import Alert from "@mui/material/Alert";
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../constants/UrlConstants";
import errorImage from '../assets/error-svgrepo-com.svg';

export default function ErrorPage() {
  const navigate = useNavigate();

  function recoverFromError() {
    navigate(HOME_URL);
    console.clear();
  }

  return (
    <>
      <img id='error_image' src={errorImage} alt="Error image" />
      <Alert
        severity="error"
        action={
          <Button color="error" onClick={recoverFromError}>Reset</Button>
        }
      >
        Something went wrong. Try clicking the reset button to reload the application.
      </Alert>
    </>
  )
}
