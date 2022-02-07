import React, { useState } from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import styles from "./ProfilePage.module.css";
import MenuLink from "./../../components/header/MenuLink";
import Modal from "./../../components/modal/Modal";

import EmailWithMark from "./../../images/email-exclamation-mark.svg";

export default function() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              py: { sm: '30px', xs: 2 },
            }}  
          >
            <img src={EmailWithMark} className={styles.emailIcon} alt="Email icon" />
            <Typography variant='body1' sx={{fontSize: { sm: '16px', xs: '12px'}}} component="p">Вы не подтвердили электронную почту. Чтобы получить доступ к функциям Crowd Marketing<br />
              Вам нужно <MenuLink href='/email' underline='hover' color='link' sx={{fontWeight: 700}}>подтвердить электронную почту</MenuLink>.</Typography>
          </Stack>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Stack
          direction='column'
          alignItems='center'
          sx={{
            pt: '108px',
            pb: '90px',
            px: '87px'
          }}
        >
          <img src={EmailWithMark} className={styles.emailIconModal} alt="Email icon" />
          <Typography variant='body1' component="p" sx={{textAlign: 'center', mt: {sm: '43px', xs: '37px'}, mb: '48px'}}>Чтобы воспользоваться этой функцией,<br />
            Вам нужно <MenuLink href='/email' underline='hover' color='link' sx={{fontWeight: 700}}>подтвердить электронную почту</MenuLink></Typography>

          <Button onClick={handleClose} variant="contained">Закрыть</Button>
        </Stack>
      </Modal>
    </>
  )
};