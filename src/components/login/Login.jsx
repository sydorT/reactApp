import React, { useState } from "react";
import styles from "./Login.module.css";
import Popup from "./Popup";
import FormInputText from "./../formInput/FormInputText";
import Cookies from "js-cookie";
import { useHeader } from "../../providers/HeaderProvider.js";
import { useForm } from "react-hook-form";
import { login } from "./requests.js";

const Login = (props) => {
  const [headerState, dispatch] = useHeader();
  const [formError, setFormError] = useState();
  const { handleSubmit, reset, control, setError, formState } = useForm();

  const onSubmit = async (data) => {
    const response = await login(data);
    const json = await response.json();
    setFormError(undefined);

    if (json.token) {
      reset();
      Cookies.set("user", response.token);
      dispatch({ type: "authenticated" });
      dispatch({ type: "dialogClosed" });
      document.body.classList.remove("modal-open");
    } else if (response.status === 401) {
      setFormError("Invalid password or login");
    } else {
      (json.fieldErrors || []).forEach((e) =>
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
      onClose={() => {
        resetForm();
        props.onClose();
      }}
      title={props.title}
      buttonTitle={props.buttonTitle}
      linkTitle={props.linkTitle}
      forgotPassword
      isAccount={props.isAccount}
      isSubmitDisabled={formState.isSubmitting}
      onClick={handleSubmit(onSubmit)}
      linkDialog={linkDialog}
    >
      {formError ? (
        <div className={styles.errorUnauthorized}>{formError}</div>
      ) : null}

      <FormInputText
        name="username"
        control={control}
        rules={{ required: "Username is required." }}
        muiProps={{ label: "Логін", type: "text" }}
      />

      <FormInputText
        name="password"
        control={control}
        rules={{ required: "Password is required." }}
        muiProps={{ label: "Пароль", type: "password" }}
      />
    </Popup>
  );
};

export default Login;
