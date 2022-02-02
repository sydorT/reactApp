import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {
  Container,
  Stack,
  IconButton,
  Link,
  Button,
  Box,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuLink from "./MenuLink";
import Login from "../login/Login";

import Logo from "./../../images/logo.svg";
import BurgerMenu from "./../../images/burger-menu.svg";
import BurgerMenuOpen from "./../../images/burger-menu-open.svg";
import Avatar from "./../../images/avatar-header.png";
import Notification from "./../../images/notification.svg";
import Settings from "./../../images/settings.svg";


const Header = () => {
  const isAuthorized = false;
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("md"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const menuMt = isAuthorized ? '48px' : '92px';
  const menuJustifyContent = isAuthorized ? 'flex-start' : 'space-between';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('modal-open');
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen && mediaSm) {
      setIsMenuOpen(false);
    }
  },[isDialogOpen, mediaSm]);

  const openDialog = () => {
    setIsDialogOpen(true);
    setIsMenuOpen(false);
    document.body.classList.toggle('modal-open');
  };

  const handleClose = (event, reason) => {
    if (reason && reason == 'backdropClick') {
      return;
    }
    setIsDialogOpen(false);
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
              {isAuthorized ? (
                <>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Задания</MenuLink>
                  <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Личный кабинет</MenuLink>
                </>) : null}
              
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Новости</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Контакты</MenuLink>
              <MenuLink href='/' color='secondary' underline='none' variant='menuLinkHeader'>Правила</MenuLink>
            </div>
            
            {isAuthorized ? (
              <>
                <Stack direction="row" alignItems='center'>
                  <Typography sx={{fontSize: 14, fontWeight: 600, color: 'secondary.main', mr: 3}}>126.41₽</Typography>
                  <img src={Settings} alt="Settings icon" />
                  <Box className={styles.notification}>
                    <img src={Notification} alt="Notification icon" />
                  </Box>
                  <img src={Avatar} className={styles.profileImg} alt="Profile avatar" />
                </Stack>
              </>) : 
              <Stack direction="row" spacing={1.5}>
                <MenuLink onClick={openDialog} color='primary' underline='hover' variant='menuLink'>Вход</MenuLink>
                <span className={styles.separator}>/</span>
                <MenuLink href='/' color='primary' underline='hover' variant='menuLink'>Регистрация</MenuLink>
              </Stack>
            }
            
          </div>

          <IconButton sx={{ p: 0 }} onClick={toggleMenu}>
            {isMenuOpen ? (
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
          anchor={'bottom'}
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        >
          <Stack direction="column" justifyContent={menuJustifyContent} sx={{height: '100%', pb: 12}}>
            {isAuthorized ? (<>
              <Stack direction="row" alignItems='center' justifyContent='space-between' sx={{maxWidth: '312px', px: 3, pt: 4}}>
                <Stack direction="row" alignItems='center'>
                  <img src={Avatar} className={styles.profileImgAuth} alt="Profile avatar" />
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
              {isAuthorized ? (<>
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

            {!isAuthorized ? (
              <Stack 
                direction='column'
                alignItems='center'
                spacing={3}
                sx={{position: 'relative', zIndex: '1', mt: 4}}
              >
                <Button variant="contained" onClick={openDialog}>Вход</Button>
                <MenuLink href='/' color='link' underline='none' variant='menuLinkMobileBlue'>Регистрация</MenuLink>
              </Stack>) : null}

          </Stack>
          {isAuthorized
            ? <div className={styles.modalBgrAuth}></div>
            : <div className={styles.modalBgr}></div>}
        </Drawer>

        {!isAuthorized ?
          <>
            <Login open={isDialogOpen} onClose={handleClose}/> 
            {/* <Register open={isDialogOpen} onClose={handleClose}/>  */}
          </> : null}
      </Container>
    </>
  );
};

export default Header;
