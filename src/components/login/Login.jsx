import React from 'react';
import styles from "./Login.module.css";
import { styled } from '@mui/material/styles';
import MenuLink from "./../header/MenuLink";
import {
  Dialog,
  Stack,
  Button,
  DialogContent,
  TextField,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";

import Arrow from "./../../images/accordion-arrow.svg";
import Google from "./../../images/google-auth-ic.svg";
import Fb from "./../../images/fb-auth-ic.svg";
import Vk from "./../../images/vk-auth-ic.svg";
import Tw from "./../../images/tw-auth-ic.svg";
import Inst from "./../../images/inst-auth-ic.svg";

const AuthDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '30px',
    margin: '15px',
    padding: '35px 55px 48px',
    overflow: 'hidden',
    '@media (max-width: 599.98px)': {
      height: '100%',
      margin: 0,
      borderRadius: 0,
      boxShadow: 'none',
      overflowY: 'scroll',
      padding: '35px 50px 40px'
    },
  },
  '&.MuiModal-root.MuiDialog-root': {
    '@media (max-width: 599.98px)': {
      top: '80px',
    },
  },  
  '& .MuiButton-startIcon': {
    margin: '0 4px 0 0'
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    overflowY: 'unset'
  },
  '& .MuiButtonBase-root.MuiButton-root': {
    marginTop: '16px',
  },
}));

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
    borderColor: '#000',
    borderWidth: '1px'
  },
  '& .MuiInput-underline.Mui-focused:after': {
    borderColor: '#000',
  },
  '& .MuiInputLabel-root': {
    color: '#A1A1A1',
    fontSize: '14px',
    fontWeight: 500
  }
});

const Login = (props) => {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));

  const hideBackdrop = mediaSm ? true : false;

  return <AuthDialog
      hideBackdrop={hideBackdrop}
      disableEscapeKeyDown={true}
      open={props.open}
      onClose={props.onClose}
      transitionDuration={0}
      sx={{
        maxWidth: {sm: '442px', xs: '100%'},
        margin: 'auto'
      }}
    >
    {!mediaSm ? (<>
      <div className={styles.authbgr}></div>
      <Button
        variant="textIcon"
        startIcon={<img src={Arrow} className={styles.buttonArrow} alt="Arrow icon" />}
        onClick={props.onClose}
        >Close</Button>
    </>) : null}
    
    <Typography sx={{textAlign: 'center', fontWeight: 600, fontSize: '32px', lineHeight: '41px', mt: '35px', mb: 2, color: 'secondary.main', position: 'relative'}}>Авторизация</Typography>

    <Stack direction='row' justifyContent='center'>
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
    </Stack>

    <DialogContent>
      <CssTextField
        margin='none'
        label="Email"
        type="email"
        fullWidth
        variant="standard"
        sx={{
          mt: '36px'
        }}
      />
      <CssTextField
        margin='none'
        label="Пароль"
        type="password"
        fullWidth
        variant="standard"
        sx={{
          my: '20px'
        }}
      />
      <MenuLink href='/' color='link' underline='hover' variant='linkSmall'>Забыли пароль?</MenuLink>

      <Stack 
        direction='column'
        alignItems='center'
        spacing={3}
        sx={{position: 'relative', zIndex: '1', mt: 8}}
      > 
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <Typography sx={{fontWeight: 500, fontSize: '12px', color: 'secondary.main', mr: '3px'}}>Еще нет аккаунта?</Typography>
          <MenuLink href='/' color='link' underline='hover' variant='linkSmall'>Регистрация</MenuLink>
        </Stack>
        <Button variant="contained" href="#">Войти</Button>
      </Stack>
    </DialogContent>
  </AuthDialog>;
};

export default Login;