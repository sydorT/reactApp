import { BackdropUnstyled } from "@mui/base";

import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  Container,
  Stack,
  IconButton,
  Link,
  Dialog,
  Slide,
  Button
} from "@mui/material";

import Logo from "./../../images/logo.svg";
import BurgerMenu from "./../../images/burger-menu.svg";
import BurgerMenuOpen from "./../../images/burger-menu-open.svg";
import MenuLink from "./MenuLink";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const isAuthorized = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  <MenuLink href='/' color='secondary' variant='menuLink'>Задания</MenuLink>
                  <MenuLink href='/' color='secondary' variant='menuLink'>Личный кабинет</MenuLink>
                </>) : null}
              
              <MenuLink href='/' color='secondary' variant='menuLink'>Новости</MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLink'>Контакты</MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLink'>Правила</MenuLink>
            </div>

            <Stack direction="row" spacing={1.5}>
              <MenuLink href='/' color='primary' variant='menuLink'>Вход</MenuLink>
              <span className={styles.separator}>/</span>
              <MenuLink href='/' color='primary' variant='menuLink'>Регистрация</MenuLink>
            </Stack>
          </div>

          <IconButton sx={{ p: 0 }} onClick={toggleMenu}>
            {isMenuOpen ? (
              <img src={BurgerMenuOpen} className={styles.burgerIcon} alt="" />
            ) : (
              <img src={BurgerMenu} className={styles.burgerIcon} alt="" />
            )}
          </IconButton>
        </div>

        <Dialog
          fullScreen
          sx={{ mt: 10, display: {md: 'none'} }}
          PaperProps={{elevation: 0}}
          BackdropComponent={BackdropUnstyled}
          open={isMenuOpen}
          onClose={toggleMenu}
          TransitionComponent={Transition}
        >
          <Stack direction="column" justifyContent='space-between' sx={{height: '100%'}}>

            <Stack direction="column" spacing={4} mt={11.5} ml={8}>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Новости</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Контакты</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Правила</span>
              </MenuLink>
            </Stack>

            <Stack 
              direction='column'
              alignItems='center'
              spacing={3}
              sx={{position: 'relative', zIndex: '1', mt: 4}}
            >
              <Button variant="contained" href="#">Вход</Button>
              <MenuLink href='/' color='link' variant='menuLinkMobileBlue'>Регистрация</MenuLink>
            </Stack>

          </Stack>
          
          
          <div className={styles.modalBgr}></div>
        </Dialog>
      </Container>
    </>
  );
};

export default Header;
