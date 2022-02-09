import React, { useState } from "react";
import styles from "./Login.module.css";
import Popup from "./Popup";
import FormInputText from "./../formInput/FormInputText";
import { useHeader } from "../../providers/HeaderProvider.js";
import { useForm } from "react-hook-form";
import {useAuth} from '../../providers/AuthProvider';
import MenuLink from "./../header/MenuLink";
import {
  Stack,
  Button,
  DialogContent,
  Typography,
  // IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";

// import Google from "./../../images/google-auth-ic.svg";
// import Fb from "./../../images/fb-auth-ic.svg";
// import Vk from "./../../images/vk-auth-ic.svg";
// import Tw from "./../../images/tw-auth-ic.svg";
// import Inst from "./../../images/inst-auth-ic.svg";
import Arrow from "./../../images/accordion-arrow.svg";

const Login = (props) => {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));
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
      isSubmitDisabled={formState.isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      linkDialog={linkDialog}
      maxWidth='412px'
    >
      <div className={styles.popupHeader}>
        {!mediaSm ? (<>
          {headerState.isLoginOpen === true
            ? <div className={styles.authbgrLogin}></div>
            : <div className={styles.authbgrRegister}></div>} 
          
          <Button
            variant="textIcon"
            startIcon={<img src={Arrow} className={styles.buttonArrow} alt="Arrow icon" />}
            onClick={props.onClose}
            >Закрыть</Button>
        </>) : null}
        
        <Typography sx={{textAlign: 'center', fontWeight: 600, fontSize: '32px', lineHeight: '41px', mt: '35px', mb: 2, color: 'secondary.main', position: 'relative'}}>Авторизация</Typography>

        {/* <Stack direction='row' justifyContent='center' pb='20px'>
          <IconButton>
            <img src={Google} alt="Google icon" />
          </IconButton>
          <IconButton>
            <img src={Fb} alt="Facebook icon" />
          </IconButton>
          <IconButton>
            <img src={Vk} alt="Vkontakte icon" />
          </IconButton>
          <IconButton>
            <img src={Tw} alt="Twitter icon" />
          </IconButton>
          <IconButton>
            <img src={Inst} alt="Instagram icon" />
          </IconButton>
        </Stack> */}
      </div>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <MenuLink href='/' color='link' sx={{display: 'block', mt: 3}} underline='hover' variant='linkSmall'>Забыли пароль?</MenuLink>
          
          <Stack 
            direction='column'
            alignItems='center'
            spacing={3}
            sx={{position: 'relative', zIndex: '1', mt: 8}}
          > 
            <Stack direction='row' justifyContent='center' alignItems='center'>
              <Typography sx={{fontWeight: 500, fontSize: '12px', color: 'secondary.main', mr: '3px'}}>Еще нет аккаунта?</Typography>
              <MenuLink onClick={linkDialog} color='link' underline='hover' variant='linkSmall'>Регистрация</MenuLink>
            </Stack>
            <Button type="submit" disabled={props.isSubmitDisabled} variant="contained">Войти</Button>
          </Stack>
        </form>
      </DialogContent>
    </Popup>
  );
};

export default Login;
