import React, { useState } from 'react';
import { Container, Stack, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import styles from "./ProfilePage.module.css";
import MenuLink from "./../../components/header/MenuLink";
import Popup from "./../../components/login/Popup";

import EmailWithMark from "./../../images/email-exclamation-mark.svg";

export default function() {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction='row'
          alignItems='center'
          sx={{
            borderRadius: '16px',
            backgroundColor: '#FBFBFB',
            maxWidth: 'fit-content',
            m: 'auto',
            mt: { sm: 8, xs: 3},
            mb: 11,
            px: { sm: 7, xs: 3},
            py: { sm: '30px', xs: 2 }
          }}  
        >
          <img src={EmailWithMark} className={styles.emailIcon} alt="Email icon" />
          <Typography variant='body1' sx={{fontSize: { sm: '16px', xs: '12px'}}} component="p">Вы не подтвердили электронную почту. Чтобы получить доступ к функциям Crowd Marketing<br />
            Вам нужно <MenuLink href='/email-confirmation' underline='hover' color='link' sx={{fontWeight: 700}}>подтвердить электронную почту</MenuLink>.</Typography>
        </Stack>
      </Container>

      <Popup
        open={open}
        onClose={handleClose}
        maxWidth='534px'
      >
        {!mediaSm ? <div className={styles.emailPopupBgr}></div> : null} 
        <Stack
          direction='column'
          alignItems='center'
          sx={{
            pt: '108px',
            pb: { sm: '90px', xs: '30px'},
            px: { sm: '87px', xs: '30px'},
            position: 'relative'
          }}
        >
          <img src={EmailWithMark} className={styles.emailIconModal} alt="Email icon" />
          <Typography variant='body1' component="p" sx={{fontSize: {sm: '16px', xs: '14px'}, lineHeight: {sm: '20px', xs: '18px'}, textAlign: 'center', mt: '43px', mb: '48px'}}>Чтобы воспользоваться этой функцией,<br />
            Вам нужно <MenuLink href='/email-confirmation' underline='hover' color='link' sx={{fontWeight: 700}}>подтвердить электронную почту</MenuLink></Typography>

          <Button onClick={handleClose} variant="contained">Закрыть</Button>
        </Stack>
      </Popup>
    </>
  )
};