import React, { useState, useEffect } from 'react';
import styles from "./EmailConfirmationPage.module.css";
import { Container, Stack, Button, Typography } from '@mui/material';
import MenuLink from "../../components/header/MenuLink";

import EmailWithMark from "./../../images/email-exclamation-mark.svg";
import EmailSuccess from "./../../images/email-success.svg";

export default function() {
  const approved = true;
  const initialState = 59;
  const [visible, setVisible] = useState(true);
  const [seconds, setSeconds] = useState(initialState);

  useEffect(() => {
    if (visible) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        } else {
          setVisible(false);
          setSeconds(initialState);
        }
      }, 1000)
      return () => clearInterval(timer);
    }
  }, [visible, seconds]);
  

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant='h3' component="h3" sx={{ mt: {sm: 11, xs: 8}, mb: {sm: 7, xs: 4} }}>Подтверждение электронной почты</Typography>

        <Stack
          direction='column'
          alignItems='center'
          sx={{
            borderRadius: '16px',
            backgroundColor: '#FBFBFB',
            maxWidth: 'fit-content',
            m: 'auto',
            px: { sm: 8, xs: 4},
            pt: { sm: '70px', xs: '36px' },
            pb: { sm: '56px', xs: '24px' }
          }}  
        >
          {approved ? 
            <>
              <img src={EmailSuccess} className={styles.emailIcon} alt="Email icon" />
              <Typography variant='body1' component="p" sx={{textAlign: 'center', mt: {sm: '43px', xs: '37px'}, mb: '48px'}}>Отлично! Вы успешно подтверидили адрес электронной почты!<br />Теперь Вы можете использовать все услуги Crowd Marketing.</Typography>
              <Button href='/' variant="contained">В личный кабинет</Button>
            </> : 
            <>
              <img src={EmailWithMark} className={styles.emailIcon} alt="Email icon" />
              <Typography variant='body1' component="p" sx={{textAlign: 'center', mt: {sm: '43px', xs: '37px'}, mb: '48px'}}>Чтобы получить доступ к нашим сервисам Вам нужно подтвердить электронную почту.<br />
                Мы отправили вам письмо на электорнный адрес <Typography component="span" color='accent' sx={{fontWeight: 700}}>crowdmarketing@gmail.com</Typography>. Проверьте его.</Typography>

              {!visible
                ? <Button onClick={() => setVisible(true)} variant="contained">Отправить еще раз</Button>
                : <Typography sx={{fontWeight: 500, fontSize: '14px', textAlign: 'center'}}>Вы можете отправить письмо еще раз через 0:{seconds}</Typography>
              }
            </>
          }
        </Stack>

        <Stack mt='56px' mb={{sm: '144px', xs: '72px'}} textAlign='center'>
          <Typography sx={{fontSize: {sm: '16px', xs: '14px'} , fontWeight: 500, lineHeight: {sm: '24px', xs: '21px'} }}>Письмо не приходит?</Typography>
          <MenuLink href='/' color='link' sx={{fontSize: {sm: '16px', xs: '14px'}, fontWeight: 600, lineHeight: {sm: '20px', xs: '18px'}}} underline='hover'>Обратитесь в службу поддержки</MenuLink>
        </Stack>
      </Container>
    </>
  )
}