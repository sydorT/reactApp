import React from 'react';
import styles from './Header.module.css';
import { Container, Stack, IconButton, Link } from '@mui/material';

import Logo from './../../images/logo.svg'
import BurgerMenu from './../../images/burger-menu.svg'

const Header = () => {
  const isAuthorized = false;

  return <>
    <Container maxWidth="lg">
      <div className={styles.header}>
        <Link href="/">
          <img src={Logo} className={styles.logo} alt='Crowd Marketing' />
        </Link>

        <div className={styles.navWrapper}>
          <div className={styles.nav}>
            {isAuthorized && (<>
              <Link href="/" variant="menuLink" color="seconday" underline="hover">Задания</Link>
              <Link href="/" variant="menuLink" color="seconday" underline="hover">Личный кабинет</Link>
              </>)}
            <Link href="/" variant="menuLink" color="seconday" underline="hover">Новости</Link>
            <Link href="/" variant="menuLink" color="seconday" underline="hover">Контакты</Link>
            <Link href="/" variant="menuLink" color="seconday" underline="hover">Правила</Link>
          </div>

          <Stack direction="row" spacing={1.5}>
            <Link href="/" variant="menuLink" underline="hover">Вход</Link>
            <span className={styles.separator}>/</span>
            <Link href="/" variant="menuLink" underline="hover">Регистрация</Link>
          </Stack>
        </div>

        <IconButton>
          <img src={BurgerMenu} className={styles.burgerIcon} alt='' />
        </IconButton>
      </div>
    </Container>
  </>
};

export default Header;