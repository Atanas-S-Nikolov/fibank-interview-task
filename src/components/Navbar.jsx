import '../styles/Navbar.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer } from '../redux/authSlice';
import { HOME_URL } from '../constants/UrlConstants';

export default function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutReducer());
    window.location.href = HOME_URL;
  }

  return (
    <AppBar>
      <Toolbar className='nav'>
        <a href={HOME_URL}>
          <Typography className='header_title' component='div'>Fibank task</Typography>
        </a>
        {
          isAuthenticated
            ? <IconButton id='logout_btn' onClick={logout}>
                <LogoutIcon />
              </IconButton>
            : null}
      </Toolbar>
    </AppBar>
  )
}
