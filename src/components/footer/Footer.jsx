import styles from "./Footer.module.css";
import { Container, Stack, Link, Box } from '@mui/material';
import MenuLink from "./../header/MenuLink";

import Logo from "./../../images/logo.svg";
import Fb from "./../../images/fb.svg";
import Tw from "./../../images/tw.svg";
import Inst from "./../../images/inst.svg";

const Footer = () => {
  return <>
    <Container maxWidth="lg" sx={{ px: { sm: 3, xs: 6 }, py: 7.5 }}>
      <Stack direction={{ md: 'row', xs: 'column' }}>
        <Link href="/">
          <img src={Logo} className={styles.logo} alt="Crowd Marketing" />
        </Link>

        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent='space-between'
          sx={{
            width: { md: 610, xs: 1 },
            ml: { md: '6vw', xs: 0 },
            mt: { md: 0, xs: 8 }
          }}
        >

          <Stack direction='column' sx={{ mb: { sm: 0, xs: 4 } }}>
            <Box sx={{ fontSize: 17, fontWeight: 500, mb: 3 }} color='accent'>Услуги</Box>
            <Stack direction='column' spacing={2.5}>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>Сделать заказ</MenuLink>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>Начать зарабатывать</MenuLink>
            </Stack>
          </Stack>

          <Stack direction='column' sx={{ mb: { sm: 0, xs: 4 } }}>
            <Box sx={{ fontSize: 17, fontWeight: 500, mb: 3 }} color='accent'>О нас</Box>
            <Stack direction='column' spacing={2.5}>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>Новости</MenuLink>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>Контакты</MenuLink>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>FAQ</MenuLink>
              <MenuLink href='/' color='secondary' underline='hover' variant='menuLinkFooter'>Помощь</MenuLink>
            </Stack>
          </Stack>

          <Stack direction='column'>
            <Box sx={{ fontSize: 17, fontWeight: 500, mb: 3 }} color='accent'>Подпишись на нас</Box>
            <Stack direction='row' spacing={4}>
              <MenuLink href='/' color='secondary' variant='menuLinkFooter'>
                <img src={Fb} alt="Facebook" />
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkFooter'>
                <img src={Tw} alt="Twitter" />
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkFooter'>
                <img src={Inst} alt="Instagram" />
              </MenuLink>
            </Stack>
          </Stack>

        </Stack>
      </Stack>

      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        justifyContent='space-between'
        sx={{ mt: { sm: 12, xs: 6 } }}
      >
        <Box sx={{ fontSize: 15, fontWeight: 400, mt: {sm: 0, xs: 5} }} color='secondary'>Copyright © 2022</Box>

        <Stack direction={{ sm: 'row', xs: 'column' }} sx={{ order: { sm: 'initial', xs: '-1'}}}>
          <Box sx={{ fontSize: 15, fontWeight: 400 }}>
            <Link href="/" underline="hover" color='secondary'>Оферта</Link>
          </Box>
          <Box sx={{ fontSize: 15, fontWeight: 400, ml: {sm: 5, xs: 0}, mt: {sm: 0, xs: 1} }}>
            <Link href="/" underline="hover" color='secondary'>Политика конфиденциальности</Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </>;
};

export default Footer;
