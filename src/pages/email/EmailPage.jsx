import React from 'react';
import { Container, Stack, Button, Typography, Box, Fade } from '@mui/material';

import EmailWithMark from "./../../images/email-exclamation-mark.svg";
import EmailSuccess from "./../../images/email-success.svg";

export default function() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant='h3' component="h3" sx={{ mt: 11, mb: '55px' }}>Подтверждение электронной почты</Typography>

        <Stack
          direction='column'
          alignItems='center'
          sx={{
            borderRadius: '16px',
            backgroundColor: '#FBFBFB',
            maxWidth: 'fit-content',
            m: 'auto',
            px: 8,
            pt: '70px',
            pb: '56px'
          }}  
        >
          <img src={EmailWithMark} alt="Email icon" />
          <Typography>Чтобы получить доступ к нашим сервисам Вам нужно подтвердить электронную почту.<br />
            Мы отправили вам письмо на электорнный адрес crowdmarketing@gmail.com. Проверьте его.</Typography>
        </Stack>
      </Container>
    </>
  )
}