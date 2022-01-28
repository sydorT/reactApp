import styles from './HomePage.module.css';
import { Container, Stack, Button, Typography, Box } from '@mui/material';

import HeroImg from './../../images/hero-img.svg'

export default function() {
  return (
    <>
      <div className={styles.hero}>
        <Container maxWidth="lg" sx={{px: {xs: 3}}}>
          <Stack
            direction={{ md: 'row', xs: 'column' }}
            justifyContent='space-between'
            pt={{md: 17, xs: 1}}
            pb={{md: 21.5, xs: 5}}
          >
            <Box sx={{mt: {md: 0, xs: 4}}}>
              <Typography variant="h2" component="div">
                Сервис заработка<br />и раскрутки в интернете
              </Typography>
              <Typography variant="body1" mb={{md: 5, xs: 6}} component="div">
                Получай реальную целевую аудиторию без ботов, банов,<br className={styles.hide} />ввода пароля и без сомнительных конкурсов
              </Typography>
              <Button variant="contained" href="#">Попробовать сейчас</Button>

              <Stack
                direction='row'
                justifyContent={{sm: 'flex-start', xs: 'space-between'}}
                spacing={{sm: 12, xs: 0}}
                mt={{sm: 10, xs: 6}}
              >
                <Stack direction='column'>
                  <Typography
                    color='accent'
                    sx={{ 
                      fontSize: {
                        md: 36, xs: 28
                      },
                      fontWeight: 600
                    }}
                  >100K+</Typography>

                  <Typography variant="body1" sx={{fontSize: {sm: 16, xs: 14}}} component="div">
                    Зарегистрировано<br />исполнителей
                  </Typography>
                </Stack>

                <Stack direction='column'>
                  <Typography 
                    color='accent'
                    sx={{ 
                      fontSize: {
                        md: 36, xs: 28
                      },
                      fontWeight: 600
                    }}
                    >1M+</Typography>

                  <Typography variant="body1" sx={{fontSize: {sm: 16, xs: 14}}} component="div">
                    Выполнених<br />заданий
                  </Typography>
                </Stack>

                <Stack direction='column'>
                  <Typography
                    color='accent'
                    sx={{ 
                      fontSize: {
                        md: 36, xs: 28
                      },
                      fontWeight: 600
                    }}
                    >2K+</Typography>

                  <Typography variant="body1" sx={{fontSize: {sm: 16, xs: 14}}} component="div">
                    Доступно<br />заданий
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <div className={styles.heroImg}>
              <img src={HeroImg} alt="Service image" />
            </div>
          </Stack>
        </Container>
      </div>
      
    </>
  );
}