import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Popup from "./Popup";
import { useQuery } from 'react-query';
import {
  TextField
} from "@mui/material";

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

const Register = (props) => {
  const [user, setUser] = useState({firstName: '', lastName: '', userName: '', email: '', password: ''});
  const [passwordRep, setPasswordRep] = useState('');
  const [errors, setErrors] = useState([]);
  const apiBaseUrl = 'http://ec2-54-161-136-170.compute-1.amazonaws.com:8082';

  async function handleSubmit() {
    const res = await fetch(`${apiBaseUrl}/v1/api/user/registration`, {
      method: "post",
      body: JSON.stringify({ userName: user.userName, lastName: user.lastName, firstName: user.firstName, email: user.email, password: user.password }),
      headers: {'Content-Type': 'application/json'},
    })
    const response = await res.json();
    if(response.result){
      console.log(response.result);
      // navigate('/');
    } else {
      setErrors(response.errors);
    }
  }

  function arePasswordsEqual(){
    return user.password === passwordRep;
  }

  return <Popup
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      isAccount={props.isAccount}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      onClick={handleSubmit}
    >
    <CssTextField
      margin='none'
      label='First Name'
      type='text'
      fullWidth
      variant='standard'
      sx={{ mt: '0px' }}
      value={user.firstName}
      onChange={e => setUser({ ...user, firstName: e.target.value })}
    />
    <CssTextField
      margin='none'
      label='Last Name'
      type='text'
      fullWidth
      variant='standard'
      sx={{ mt: '7px' }}
      value={user.lastName}
      onChange={e => setUser({ ...user, lastName: e.target.value })}
    />
    <CssTextField
      margin='none'
      label='Username'
      type='text'
      fullWidth
      variant='standard'
      sx={{ mt: '7px' }}
      value={user.userName}
      onChange={e => setUser({ ...user, userName: e.target.value })}
    />
    <CssTextField
      margin='none'
      label='Email'
      type='email'
      fullWidth
      variant='standard'
      sx={{ mt: '7px' }}
      value={user.email}
      onChange={e => setUser({ ...user, email: e.target.value })}
    />
    <CssTextField
      margin='none'
      label="Пароль"
      type="password"
      fullWidth
      variant="standard"
      sx={{ mt: '7px' }}
      value={user.password}
      onChange={e => setUser({ ...user, password: e.target.value })}
    />
    <CssTextField
      margin='none'
      label="Пароль повторіть"
      type="password"
      fullWidth
      variant="standard"
      sx={{ mt: '7px', mb: 3 }}
      value={user.passwordRep}
      onChange={e => setPasswordRep({ ...user, passwordRep: e.target.value })}
    />
  </Popup>
};

export default Register;