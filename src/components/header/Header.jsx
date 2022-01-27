import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import Logo from './../../images/logo.svg'
import BurgerMenu from './../../images/burger-menu.svg'

const Header = () => {
  return <div className={styles.header}>
    <Link to={'/'}>
      <img src={Logo} className={styles.logo} alt='Crowd Marketing' />
    </Link>

    <div className={styles.navWrapper}>
      <div className={styles.nav}>
        <Link className={styles.navLink} to={'/'}>Новости</Link>
        <Link className={styles.navLink} to={'/'}>Контакты</Link>
        <Link className={styles.navLink} to={'/'}>Правила</Link>
      </div>

      <div>
        <Link to={'/'} className={styles.login}>Вход</Link>
        <span className={styles.separator}>/</span>
        <Link to={'/'} className={styles.login}>Регистрация</Link>
      </div>
    </div>

    <img src={BurgerMenu} className={styles.burgerIcon} alt='' />
  </div>;
};

export default Header;