import React from 'react';
import styles from "./Login.module.css";
import { styled } from '@mui/material/styles';
import Popup from "./Popup";
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

  return <Popup
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      isAccount={props.isAccount}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
    >
    <CssTextField
      margin='none'
      label="Email"
      type="email"
      fullWidth
      variant="standard"
      sx={{
        mt: '36px'
      }}
    />
    <CssTextField
      margin='none'
      label="Email"
      type="email"
      fullWidth
      variant="standard"
      sx={{
        mt: '36px'
      }}
    />
    <CssTextField
      margin='none'
      label="Пароль"
      type="password"
      fullWidth
      variant="standard"
      sx={{
        my: '20px'
      }}
    />
  </Popup>
};

export default Register;