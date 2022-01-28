import styles from './HomePage.module.css';
import { Container, Stack, Button, Typography } from '@mui/material';

import HeroImg from './../../images/hero-img.svg'

export default function() {
  return (
    <>
      <div className={styles.hero}>
        <Container maxWidth="lg">
          <Stack
            direction={{ md: 'row', xs: 'column' }}
            justifyContent='space-between'
            pt={{md: 17, sm: 5}}
            pb={{md: 21.5, sm: 5}}
          >
            <div>
              <Typography variant="h2" component="div">
                Сервис заработка<br />и раскрутки в интернете
              </Typography>
              <Typography variant="body1" mb={5} component="div">
                Получай реальную целевую аудиторию без ботов, банов,<br />ввода пароля и без сомнительных конкурсов
              </Typography>
              <Button variant="contained" href="#">Попробовать сейчас</Button>

              <Stack
                direction='row'
                spacing={12}
                mt={10}
              >
                <Stack direction='column'>
                  <Typography color='accent' sx={{ fontSize: 36, textTransform: 'uppercase', fontWeight: 600 }}>100K+</Typography>
                  <Typography variant="body1" component="div">
                    Зарегистрировано<br />исполнителей
                  </Typography>
                </Stack>

                <Stack direction='column'>
                  <Typography color='accent' sx={{ fontSize: 36, textTransform: 'uppercase', fontWeight: 600 }}>1M+</Typography>
                  <Typography variant="body1" component="div">
                    Выполнених<br />заданий
                  </Typography>
                </Stack>

                <Stack direction='column'>
                  <Typography color='accent' sx={{ fontSize: 36, textTransform: 'uppercase', fontWeight: 600 }}>2K+</Typography>
                  <Typography variant="body1" component="div">
                    Доступно<br />заданий
                  </Typography>
                </Stack>
              </Stack>
            </div>

            <div>
              <img src={HeroImg} alt="Service image" />
            </div>
          </Stack>
        </Container>
      </div>
      
    </>
  );
}