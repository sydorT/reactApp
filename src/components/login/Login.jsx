import React, { useState, useEffect } from 'react';
import styles from "./Login.module.css";
import Popup from "./Popup";
import FormInputText from "./../formInput/FormInputText";
import Cookies from 'js-cookie';
import { useHeader } from "../../providers/HeaderProvider.js";
import { Controller, useForm } from "react-hook-form";


const Login = (props) => {
  const [headerState, dispatch] = useHeader();
  // const [errors, setErrors] = useState([]);
  const [errorUnauthorized, setErrorUnauthorized] = useState([]);
  const apiBaseUrl = '//ec2-54-161-136-170.compute-1.amazonaws.com:8082';

  const { handleSubmit, formState: { errors }, reset, control, setError } = useForm();
  const onSubmit = (data) => {
    (async () => {
      const res = await fetch(`${apiBaseUrl}/v1/api/user/login`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
      })
      const response = await res.json();

      console.log(errors);



      if(response.token){
        Cookies.set('user', response.token);
        dispatch({type: 'authenticated'});
        dispatch({type: 'dialogClosed'});
        document.body.classList.remove('modal-open');
      }
      else if (res.status === 401){
        setErrorUnauthorized('Invalid password or login');
      }

      else {
        // setErrors(response.fieldErrors || []);

        (response.fieldErrors || []).forEach(e => {
          // this adds server side errors to react hook form
          setError(e.field, {message: e.message});
        })
      }
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

    <FormInputText
      name='username'
      control={control}
      rules={{ required: 'Username is required.'}}
      muiProps={{label: 'Логін', type: 'text'}}
    />

    <FormInputText
      name='password'
      control={control}
      rules={{ required: 'Password is required.'}}
      muiProps={{label: 'Пароль', type: 'password'}}
    />

    {/* <Controller
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
      /> */}
  </Popup>
};

export default Login;