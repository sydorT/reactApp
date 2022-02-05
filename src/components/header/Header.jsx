import React, { useEffect} from "react";
import styles from "./Header.module.css";
import {
  Container,
  Stack,
  IconButton,
  Link,
  Button,
  Box,
  Typography,
  Drawer
} from "@mui/material";
import MenuLink from "./MenuLink";
import Login from "../login/Login";
import Register from "../login/Register";
import { useHeader } from "../../providers/HeaderProvider.js";
import Cookies from 'js-cookie';
import AccountMenu from "./AccountMenu";

import Logo from "./../../images/logo.svg";
import BurgerMenu from "./../../images/burger-menu.svg";
import BurgerMenuOpen from "./../../images/burger-menu-open.svg";
import Notification from "./../../images/notification.svg";
import Settings from "./../../images/settings.svg";

const Header = () => {
  const [headerState, dispatch] = useHeader();
  const menuMt = headerState.isAuthorized ? '48px' : '92px';
  const menuJustifyContent = headerState.isAuthorized ? 'flex-start' : 'space-between';

  const readCookie = () => {
    const user = Cookies.get('user');
    if (user) {
      dispatch({type: 'authenticated'});
    }
  }

  useEffect(() => {
    readCookie();
  }, []);  

  const toggleMenu = () => {
    const root = document.getElementsByTagName( 'html' )[0];
    dispatch({type: 'menuToggled'});
    if (headerState.isMenuOpen !== true) {
      document.body.classList.add('modal-open');
      root.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      root.classList.remove('modal-open');
    }
  };

  const openDialog = (popup) => {
    dispatch({type: 'openDialog', payload: popup});
    document.body.classList.add('modal-open');
  };

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') {
      return;
    }
    dispatch({type: 'dialogClosed'});
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ px: { xs: 3 } }}>
        <div className={styles.header}>
          <Link href="/">
            <img src={Logo} className={styles.logo} alt="Crowd Marketing" />
          </Link>

          <div className={styles.navWrapper}>
            <div className={styles.nav}>
              {headerState.isAuthorized ? (
                <>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Задания</MenuLink>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Личный кабинет</MenuLink>
                </>) : null}
              
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Новости</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Контакты</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Правила</MenuLink>
            </div>
            
            {headerState.isAuthorized ? (
              <>
                <Stack direction="row" alignItems='center'>
                  <Typography sx={{fontSize: 14, fontWeight: 600, color: 'secondary.main', mr: 3}}>126.41₽</Typography>
                  <img src={Settings} alt="Settings icon" />
                  <Box className={styles.notification}>
                    <img src={Notification} alt="Notification icon" />
                  </Box>
                  <AccountMenu sx={{width: 40, height: 40}} />
                </Stack>
              </>) : 
              <Stack direction="row" spacing={1.5}>
                <MenuLink onClick={() => openDialog('login')} color='primary' underline='hover' variant='menuLink'>Вход</MenuLink>
                <span className={styles.separator}>/</span>
                <MenuLink onClick={() => openDialog('register')} color='primary' underline='hover' variant='menuLink'>Регистрация</MenuLink>
              </Stack>
            }
            
          </div>

          <IconButton sx={{ p: 0 }} onClick={toggleMenu}>
            {headerState.isMenuOpen ? (
              <img src={BurgerMenuOpen} className={styles.burgerIcon} alt="" />
            ) : (
              <img src={BurgerMenu} className={styles.burgerIcon} alt="" />
            )}
          </IconButton>
        </div>

        <Drawer
          elevation={0}
          sx={{ mt: 10, display: {md: 'none'} }}
          hideBackdrop={true}
          anchor={'right'}
          open={headerState.isMenuOpen}
        >
          <Stack direction="column" justifyContent={menuJustifyContent} sx={{height: '100%', pb: 12}}>
            {headerState.isAuthorized ? (<>
              <Stack direction="row" alignItems='center' justifyContent='space-between' sx={{maxWidth: '312px', px: 3, pt: 4}}>
                <Stack direction="row" alignItems='center'>
                  <AccountMenu sx={{width: 56, height: 56, mr: 2}}/>
                  <Box>
                    <Typography sx={{fontSize: 16, fontWeight: 600, color: 'secondary.main'}}>Максим Барцов</Typography>
                    <Typography sx={{fontSize: 14, fontWeight: 600, color: 'secondary.main'}}>126.41₽</Typography>
                  </Box>
                </Stack>
                
                <Stack direction="row" alignItems='center'>
                  <img src={Settings} className={styles.settingsAuth} alt="Settings icon" />
                  <Box className={styles.notificationAuth}>
                    <img src={Notification} alt="Notification icon" />
                  </Box>
                </Stack>
              </Stack>
            </>) : null}

            <Stack direction="column" spacing={4} mt={menuMt} ml={8}>
              {headerState.isAuthorized ? (<>
                <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                  <span className={styles.linkMobile}>Задания</span>
                </MenuLink>
                <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                  <span className={styles.linkMobile}>Личный кабинет</span>
                </MenuLink>
              </>) : null}

              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Новости</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Контакты</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Правила</span>
              </MenuLink>
            </Stack>

            {!headerState.isAuthorized ? (
              <Stack 
                direction='column'
                alignItems='center'
                spacing={3}
                sx={{position: 'relative', zIndex: '1', mt: 4}}
              >
                <Button variant="contained" onClick={() => openDialog('login')}>Вход</Button>
                <MenuLink onClick={() => openDialog('register')} color='link' underline='none' variant='menuLinkMobileBlue'>Регистрация</MenuLink>
              </Stack>) : null}

          </Stack>
          {headerState.isAuthorized
            ? <div className={styles.modalBgrAuth}></div>
            : <div className={styles.modalBgr}></div>}
        </Drawer>

        {!headerState.isAuthorized ?
          <>
            <Login
              open={headerState.isLoginOpen}
              onClose={handleClose}
              title='Авторизация'
              isAccount='Еще нет аккаунта?'
              buttonTitle='Войти'
              linkTitle='Регистрация'
              forgotPassword
            />
            <Register
              open={headerState.isRegisterOpen}
              onClose={handleClose}
              title='Регистрация'
              isAccount='Уже есть аккаунт?'
              buttonTitle='Зарегистрироваться'
              linkTitle='Войти'
            /> 
          </> : null}
      </Container>
    </>
  );
};

export default Header;
