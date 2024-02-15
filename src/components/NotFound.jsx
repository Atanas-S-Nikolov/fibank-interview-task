import '../styles/NotFound.css';
import notFoundImage from '../assets/not-found-error-alert-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HOME_URL } from '../constants/UrlConstants';

export default function NotFound() {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate(HOME_URL);
  }

  return (
    <>
      <img id='not_found_image' src={notFoundImage} alt="404 not found image" />
      <Typography id='title' variant='h3'>Page not found.</Typography>
      <Button variant='contained' onClick={navigateToHomePage}>Back to Home page</Button>
    </>
  )
}
