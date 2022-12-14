import React from "react";
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
import { useAuth } from "../../providers/AuthProvider";
import AccountMenu from "./AccountMenu";

import Logo from "./../../images/logo.svg";
import BurgerMenu from "./../../images/burger-menu.svg";
import BurgerMenuOpen from "./../../images/burger-menu-open.svg";
import Notification from "./../../images/notification.svg";
import Settings from "./../../images/settings.svg";

const Header = () => {
  const [headerState, dispatch] = useHeader();
  const { isAuthenticated, isLoading } = useAuth();

  const menuMt = isAuthenticated ? '48px' : '92px';
  const menuJustifyContent = isAuthenticated ? 'flex-start' : 'space-between';

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

  if(isLoading) {
    return null
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ px: { xs: 3 } }}>
        <div className={styles.header}>
          <Link href="/">
            <img src={Logo} className={styles.logo} alt="Crowd Marketing" />
          </Link>

          <div className={styles.navWrapper}>
            <div className={styles.nav}>
              {isAuthenticated ? (
                <>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>??????????????</MenuLink>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>???????????? ??????????????</MenuLink>
                </>) : null}
              
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>??????????????</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>????????????????</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>??????????????</MenuLink>
            </div>
            
            {isAuthenticated ? (
              <>
                <Stack direction="row" alignItems='center'>
                  <Typography sx={{fontSize: 14, fontWeight: 600, color: 'secondary.main', mr: 3}}>126.41???</Typography>
                  <img src={Settings} alt="Settings icon" />
                  <Box className={styles.notification}>
                    <img src={Notification} alt="Notification icon" />
                  </Box>
                  <AccountMenu sx={{width: 40, height: 40}} />
                </Stack>
              </>) : 
              <Stack direction="row" spacing={1.5}>
                <MenuLink onClick={() => openDialog('login')} color='primary' underline='hover' variant='menuLink'>????????</MenuLink>
                <span className={styles.separator}>/</span>
                <MenuLink onClick={() => openDialog('register')} color='primary' underline='hover' variant='menuLink'>??????????????????????</MenuLink>
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
            {isAuthenticated ? (<>
              <Stack direction="row" alignItems='center' justifyContent='space-between' sx={{maxWidth: '312px', px: 3, pt: 4}}>
                <Stack direction="row" alignItems='center'>
                  <AccountMenu sx={{width: 56, height: 56, mr: 2}}/>
                  <Box>
                    <Typography sx={{fontSize: 16, fontWeight: 600, color: 'secondary.main'}}>???????????? ????????????</Typography>
                    <Typography sx={{fontSize: 14, fontWeight: 600, color: 'secondary.main'}}>126.41???</Typography>
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
              {isAuthenticated ? (<>
                <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                  <span className={styles.linkMobile}>??????????????</span>
                </MenuLink>
                <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                  <span className={styles.linkMobile}>???????????? ??????????????</span>
                </MenuLink>
              </>) : null}

              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>??????????????</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>????????????????</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>??????????????</span>
              </MenuLink>
            </Stack>

            {!isAuthenticated ? (
              <Stack 
                direction='column'
                alignItems='center'
                spacing={3}
                sx={{position: 'relative', zIndex: '1', mt: 4}}
              >
                <Button variant="contained" onClick={() => openDialog('login')}>????????</Button>
                <MenuLink onClick={() => openDialog('register')} color='link' underline='none' variant='menuLinkMobileBlue'>??????????????????????</MenuLink>
              </Stack>) : null}

          </Stack>
          {isAuthenticated
            ? <div className={styles.modalBgrAuth}></div>
            : <div className={styles.modalBgr}></div>}
        </Drawer>

        {!isAuthenticated ?
          <>
            <Login
              open={headerState.isLoginOpen}
              onClose={handleClose}
            />
            <Register
              open={headerState.isRegisterOpen}
              onClose={handleClose}
            /> 
          </> : null}
      </Container>
    </>
  );
};

export default Header;
