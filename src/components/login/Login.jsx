import React, { useState } from 'react';
import styles from "./Login.module.css";
import Popup from "./Popup";
import FormInputText from "./../formInput/FormInputText";
import Cookies from 'js-cookie';
import { useHeader } from "../../providers/HeaderProvider.js";
import { Controller, useForm } from "react-hook-form";
import { login } from "./requests.js";


const Login = (props) => {
  const [headerState, dispatch] = useHeader();
  const [errorUnauthorized, setErrorUnauthorized] = useState([]);

  const { handleSubmit, reset, control, setError } = useForm();
  const onSubmit = async (data) => {
    const response = login(data);

    if(response.token){
      Cookies.set('user', response.token);
      dispatch({type: 'authenticated'});
      dispatch({type: 'dialogClosed'});
      document.body.classList.remove('modal-open');
    }
    // else if (res.status === 401){
    //   // TODO, use setError here
    //   setErrorUnauthorized('Invalid password or login');
    // }
    else {
      (response.fieldErrors || []).forEach(e => setError(e.field, {message: e.message}));
    }
  };  

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
  </Popup>
};

export default Login;