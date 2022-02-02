import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Popup from "./Popup";
import { TextField } from "@mui/material";
import Cookies from 'js-cookie';
import { useHeader } from "../../providers/HeaderProvider.js";

const CssTextField = styled(TextField)({
  '&label.Mui-focused': {
    color: '#A1A1A1',
  },
  '& .MuiInput-underline:after': {
    borderColor: '#E8E8E8',
    borderWidth: '1px'
  },
  '& .MuiInput-underline:before': {
    borderColor: '#E8E8E8',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderColor: '#9C42E2',
    borderWidth: '1px'
  },
  '& .MuiInput-underline.Mui-focused:after': {
    borderColor: '#9C42E2',
  },
  '& .MuiInputLabel-root': {
    color: '#A1A1A1',
    fontSize: '14px',
    fontWeight: 500
  }
});

const Login = (props) => {
  const [headerState, dispatch] = useHeader();
  const [user, setUser] = useState({username: '', password: ''});
  const apiBaseUrl = 'http://ec2-54-161-136-170.compute-1.amazonaws.com:8082';

  async function handleSubmit() {
    const res = await fetch(`${apiBaseUrl}/v1/api/user/login`, {
      method: "post",
      body: JSON.stringify({ username: user.username, password: user.password, }),
      headers: {'Content-Type': 'application/json'},
    })
    const response = await res.json();
    if(response){
      Cookies.set('user', response.token);
      dispatch({type: 'authenticated'});
      dispatch({type: 'dialogClosed'});
      document.body.classList.remove('modal-open');
    }
  }

  return <Popup
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      forgotPassword
      isAccount={props.isAccount}
      onClick={handleSubmit}
    >
    <CssTextField
      margin='none'
      label='Username'
      type='text'
      fullWidth
      variant='standard'
      sx={{ mt: '0px' }}
      value={user.username}
      onChange={e => setUser({ ...user, username: e.target.value })}
    />
    <CssTextField
      margin='none'
      label="Пароль"
      type="password"
      fullWidth
      variant="standard"
      sx={{ mt: '7px', mb: 3 }}
      value={user.password}
      onChange={e => setUser({ ...user, password: e.target.value })}
    />
  </Popup>
};

export default Login;