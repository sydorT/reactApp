import React, { useState } from 'react';
import Popup from "./Popup";
import styles from "./Login.module.css";
import { useHeader } from "../../providers/HeaderProvider.js";
import FormInputText from "./../formInput/FormInputText";
import { useForm } from "react-hook-form";
import { register } from "./requests.js";

const Register = (props) => {
  const [headerState, dispatch] = useHeader();
  const { handleSubmit, reset, control, setError, watch, formState } = useForm();
  const password = watch('password');
  const [formError, setFormError] = useState();

  const onSubmit = async (data) => {
      const response = await register(data);
      setFormError(undefined);

      if(response.status === 200) {
        reset();
        dispatch({type: 'openDialog', payload: 'login'});
      }
      else {
        const data = await response.json();
        (data.fieldErrors || []).forEach(e => setError(e.field, {message: e.message}));
        if(data.message) {
          setFormError(data.message);
        }
      }
  }

  const linkDialog = () => {
    if (headerState.isRegisterOpen) {
      resetForm();
      dispatch({type: 'openDialog', payload: 'login'});
    }
  };

  function resetForm() {
    reset();
    setFormError(undefined);
  }

  return <Popup
      open={props.open}
      onClose={() => {
        resetForm();
        props.onClose();
      }}
      title={props.title}
      isAccount={props.isAccount}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      isSubmitDisabled={formState.isSubmitting}
      onClick={handleSubmit(onSubmit)}
      linkDialog={linkDialog}
    >
      {formError ? <div className={styles.errorUnauthorized}>{formError}</div> : null }
      
      <FormInputText
        name='firstName'
        control={control}
        rules={{ required: 'First Name is required.'}}
        muiProps={{label: 'First Name', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='lastName'
        control={control}
        rules={{ required: 'Last Name is required.'}}
        muiProps={{label: 'Last Name', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='username'
        control={control}
        rules={{ required: 'Username is required.'}}
        muiProps={{label: 'Username', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='email'
        control={control}
        rules={{ required: 'Email is required.'}}
        muiProps={{label: 'Email', type: 'email', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='password'
        control={control}
        rules={{ required: 'Password is required.'}}
        muiProps={{label: 'Пароль', type: 'password', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='passwordRep'
        control={control}
        rules={{
          required: 'Password confirm is required.',
          validate: (v) => v === password || 'Passwords should match.'
        }}
        muiProps={{label: 'Подтвердите пароль', type: 'password', sx:{ mt: '7px', mb: 3 }}}
      />
  </Popup>
};

export default Register;