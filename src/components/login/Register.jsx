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
      onClose={(event, reason) => {
        resetForm();
        props.onClose(event, reason);
      }}
      title={props.title}
      isAccount={props.isAccount}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      isSubmitDisabled={formState.isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      linkDialog={linkDialog}
    >
      {formError ? <div className={styles.errorUnauthorized}>{formError}</div> : null }
      
      <FormInputText
        name='firstName'
        control={control}
        rules={{ required: 'Требуется имя.'}}
        muiProps={{label: 'Имя', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='lastName'
        control={control}
        rules={{ required: 'Требуется фамилия.'}}
        muiProps={{label: 'Фамилия', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='username'
        control={control}
        rules={{ required: 'Требуется никнейм.'}}
        muiProps={{label: 'Никнейм', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='email'
        control={control}
        rules={{ required: 'Требуется емейл.'}}
        muiProps={{label: 'Емейл', type: 'email', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='password'
        control={control}
        rules={{ required: 'Требуется пароль.'}}
        muiProps={{label: 'Пароль', type: 'password', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='passwordRep'
        control={control}
        rules={{
          required: 'Требуется подтверждение пароля.',
          validate: (v) => v === password || 'Пароли должны совпадать.'
        }}
        muiProps={{label: 'Подтвердите пароль', type: 'password', sx:{ mt: '7px', mb: 3 }}}
      />
  </Popup>
};

export default Register;