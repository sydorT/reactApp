import React, { useState } from 'react';
import Popup from "./Popup";
import styles from "./Login.module.css";
import { useHeader } from "../../providers/HeaderProvider.js";
import FormInputText from "./../formInput/FormInputText";
import { useForm } from "react-hook-form";
import { register } from "./requests.js";
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

const Register = (props) => {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));
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
      
      <Typography sx={{textAlign: 'center', fontWeight: 600, fontSize: '32px', lineHeight: '41px', mt: '35px', mb: 2, color: 'secondary.main', position: 'relative'}}>Регистрация</Typography>

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
        {formError ? <div className={styles.errorUnauthorized}>{formError}</div> : null }
        
        <FormInputText
          name='firstName'
          control={control}
          rules={{ required: 'Требуется имя'}}
          muiProps={{label: 'Имя', type: 'text', sx:{ mt: '7px' }}}
        />
        <FormInputText
          name='lastName'
          control={control}
          rules={{ required: 'Требуется фамилия'}}
          muiProps={{label: 'Фамилия', type: 'text', sx:{ mt: '7px' }}}
        />
        <FormInputText
          name='username'
          control={control}
          rules={{ required: 'Требуется никнейм'}}
          muiProps={{label: 'Никнейм', type: 'text', sx:{ mt: '7px' }}}
        />
        <FormInputText
          name='email'
          control={control}
          rules={{ required: 'Требуется емейл'}}
          muiProps={{label: 'Емейл', type: 'email', sx:{ mt: '7px' }}}
        />
        <FormInputText
          name='password'
          control={control}
          rules={{ required: 'Требуется пароль'}}
          muiProps={{label: 'Пароль', type: 'password', sx:{ mt: '7px' }}}
        />
        <FormInputText
          name='passwordRep'
          control={control}
          rules={{
            required: 'Требуется подтверждение пароля',
            validate: (v) => v === password || 'Пароли должны совпадать'
          }}
          muiProps={{label: 'Подтвердите пароль', type: 'password', sx:{ mt: '7px', mb: 3 }}}
        />

        {props.forgotPassword && <MenuLink href='/' color='link' sx={{display: 'block', mt: 3}} underline='hover' variant='linkSmall'>Забыли пароль?</MenuLink>}
        
        <Stack 
          direction='column'
          alignItems='center'
          spacing={3}
          sx={{position: 'relative', zIndex: '1', mt: 8}}
        > 
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <Typography sx={{fontWeight: 500, fontSize: '12px', color: 'secondary.main', mr: '3px'}}>Уже есть аккаунт?</Typography>
            <MenuLink onClick={linkDialog} color='link' underline='hover' variant='linkSmall'>Войти</MenuLink>
          </Stack>
          <Button type="submit" disabled={props.isSubmitDisabled} variant="contained">Зарегистрироваться</Button>
        </Stack>
      </form>
    </DialogContent>
  </Popup>
};

export default Register;