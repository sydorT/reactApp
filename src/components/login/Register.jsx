import React from 'react';
import Popup from "./Popup";
import { useHeader } from "../../providers/HeaderProvider.js";
import FormInputText from "./../formInput/FormInputText";
import { Controller, useForm } from "react-hook-form";
import { register } from "./requests.js";

const Register = (props) => {
  const [headerState, dispatch] = useHeader();
  const { handleSubmit, formState: { errors }, reset, control, setError, watch } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
      let { res, response } = register(data);
      console.log(res);
      if(res.status === 200) {
        
        reset();
        dispatch({type: 'openDialog', payload: 'login'});
        // TODO close register popup and show success message
      }
      else {
        (response.fieldErrors || []).forEach(e => setError(e.field, {message: e.message}));
      }
  }

  return <Popup
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      isAccount={props.isAccount}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      onClick={handleSubmit(onSubmit)}
    >
      <FormInputText
        name='firstName'
        control={control}
        rules={{ required: 'Username is required.'}}
        muiProps={{label: 'First Name', type: 'text', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='lastName'
        control={control}
        rules={{ required: 'Username is required.'}}
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
        rules={{ required: 'Username is required.'}}
        muiProps={{label: 'Email', type: 'email', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='password'
        control={control}
        rules={{ required: 'Username is required.'}}
        muiProps={{label: 'Пароль', type: 'password', sx:{ mt: '7px' }}}
      />
      <FormInputText
        name='passwordRep'
        control={control}
        rules={{
          required: 'Password confirm is required.',
          validate: (v) => v === password || 'Passwords should match.'
        }}
        muiProps={{label: 'Повторіть пароль', type: 'password', sx:{ mt: '7px', mb: 3 }}}
      />
  </Popup>
};

export default Register;