import React, { useState } from "react";
import styles from "./Login.module.css";
import Popup from "./Popup";
import FormInputText from "./../formInput/FormInputText";
import { useHeader } from "../../providers/HeaderProvider.js";
import { useForm } from "react-hook-form";
import {useAuth} from '../../providers/AuthProvider'

const Login = (props) => {
  const { login } = useAuth();
  const [headerState, dispatch] = useHeader();
  const [formError, setFormError] = useState();
  const { handleSubmit, reset, control, setError, formState } = useForm();

  const onSubmit = async (data) => {
    const result = await login(data);
    setFormError(undefined);

    if(result.success){
      reset();
      dispatch({ type: "dialogClosed" });
      document.body.classList.remove("modal-open");
    } else if(result.error){
      setFormError(result.error)
    } else if(result.fieldErrors){
      result.fieldErrors.forEach((e) =>
        setError(e.field, { message: e.message })
      );
    }
  };

  const linkDialog = () => {
    if (headerState.isLoginOpen) {
      resetForm();
      dispatch({type: 'openDialog', payload: 'register'});
    }
  };

  function resetForm() {
    reset();
    setFormError(undefined);
  }

  return (
    <Popup
      open={props.open}
      onClose={(event, reason) => {
        resetForm();
        props.onClose(event, reason);
      }}
      title={props.title}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      forgotPassword
      isAccount={props.isAccount}
      isSubmitDisabled={formState.isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      linkDialog={linkDialog}
    >
      {formError ? (
        <div className={styles.errorUnauthorized}>{formError}</div>
      ) : null}

      <FormInputText
        name="username"
        control={control}
        rules={{ required: "Требуется имя пользователя" }}
        muiProps={{ label: "Логин", type: "text" }}
      />

      <FormInputText
        name="password"
        control={control}
        rules={{ required: "Требуется пароль" }}
        muiProps={{ label: "Пароль", type: "password" }}
      />
    </Popup>
  );
};

export default Login;
