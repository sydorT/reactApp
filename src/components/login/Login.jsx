import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import styles from "./Login.module.css";
import Popup from "./Popup";
import { TextField } from "@mui/material";
import Cookies from 'js-cookie';
import { useHeader } from "../../providers/HeaderProvider.js";
import { Controller, useForm } from "react-hook-form";

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
  },
  '& .MuiFormHelperText-root': {
    color: '#E74C3C',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '8px'
  }
});

const Login = (props) => {
  const [headerState, dispatch] = useHeader();
  // const [errors, setErrors] = useState([]);
  const [errorUnauthorized, setErrorUnauthorized] = useState([]);
  const apiBaseUrl = '//ec2-54-161-136-170.compute-1.amazonaws.com:8082';

  const { handleSubmit, formState: { errors }, reset, control } = useForm();
  const onSubmit = (data) => {
    (async () => {
      const res = await fetch(`${apiBaseUrl}/v1/api/user/login`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
      })
      const response = await res.json();
      console.log(errors.username);
      if(response.token){
        Cookies.set('user', response.token);
        dispatch({type: 'authenticated'});
        dispatch({type: 'dialogClosed'});
        document.body.classList.remove('modal-open');
      }
      else if (res.status === 401){
        setErrorUnauthorized('Invalid password or login');
      }
      // else {
      //   setErrors(response.fieldErrors || []);
      // }
    })();
  };  

  // function getErrorMessage(field) {
  //   const arrError = errors.filter((item) => item.field === field);
  //   if (arrError.length > 0) {
  //     return arrError[0].message;
  //   } else {
  //     return null;
  //   }
  // }

  return <Popup
    open={props.open}
    onClose={props.onClose}
    title={props.title}
    buttonTitle={props.buttonTitle}
    linkTitle={props.linkTitle}
    forgotPassword
    isAccount={props.isAccount}
    onClick={handleSubmit(onSubmit)}
  >
    <div className={styles.errorUnauthorized}>{errorUnauthorized}</div>

    <Controller
        name={"username"}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <CssTextField
            // helperText={getErrorMessage('username')}
            // required={true}
            margin='none'
            label='Username'
            type='text'
            fullWidth
            variant='standard'
            sx={{ mt: '0px' }}
            value={value || ''}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name={"password"}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <CssTextField
            // helperText={getErrorMessage('password')}
            // required={true}
            margin='none'
            label="Пароль"
            type="password"
            fullWidth
            variant="standard"
            sx={{ mt: '7px', mb: 3 }}
            value={value || ''}
            onChange={onChange}
          />
        )}
      />
  </Popup>
};

export default Login;