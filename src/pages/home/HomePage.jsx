import styles from './HomePage.module.css';
import { Container, Stack, Button, Typography, Box } from '@mui/material';

import HeroImg from './../../images/hero-img.svg'
import SecurityImg from './../../images/security-bgr.svg'
import Advantage1 from './../../images/advantage1.svg'
import Advantage2 from './../../images/advantage2.svg'
import Advantage3 from './../../images/advantage3.svg'
import Howto1 from './../../images/howto1.svg'
import Howto2 from './../../images/howto2.svg'
import Howto3 from './../../images/howto3.svg'

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

      <div className={styles.howto}>
        <Box sx={{maxWidth: 1114, m: 'auto'}}>
          <Container maxWidth='false'>

            <Box sx={{
              mb: {md: 9, xs: 7},
              textAlign: 'center' }}
            >
              <Typography variant="h2" component="div">Зарабатывайте выполняя<br className={styles.hide} />задания</Typography>
              <Typography variant="body1" component="div">3 шага чтобы начать зарабатывать</Typography>
            </Box>

            <Stack
              direction={{ md: 'row', xs: 'column' }}
              justifyContent='space-between'
              alignItems={{ md: 'flex-start', xs: 'center'}}
              spacing={9}
            >
              <Feature 
                img={Howto1}
                title='Выполняйте задания'
                body='Выполняйте интересные задания от заказчиков в свободное для Вас время'
              />

              <Feature 
                img={Howto2}
                title='Зарабатывайте деньги'
                body='Получайте честно заработанные деньги сразу же после проверки задания'
              />

              <Feature 
                img={Howto3}
                title='Получите результат'
                body='Тысячи заказчиков готовы платить за выполнение вами задания'
              />
            </Stack>

          </Container>
        </Box>
      </div>

      <Container maxWidth="laptop" sx={{px: {xs: 3}, mb: {md: 25, sm: 12, xs: 12}}}>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Box sx={{
            maxWidth: 510,
            mb: {md: 0, xs: 4},
            textAlign: {md: 'left', xs: 'center'} }}
          >
            <Typography variant="h2" component="div">Полная безопасность</Typography>
            <Typography variant="body1" component="div">
              Для обеспечения безопасности наша команда на протяжении многих лет изучает алгоритмы социальных сетей, благодаря чему нам удается соблюдать допустимые соц сетями лимит, полностью избегая тем самым любых блокировок
            </Typography>
          </Box>

          <div className={styles.securityImg}>
            <img src={SecurityImg} alt="Security image" />
          </div>
        </Stack>
      </Container>

      <div className={styles.advantages}>
        <Box sx={{maxWidth: 1008, m: 'auto'}}>
          <Container maxWidth='false'>

            <Box sx={{
              mb: {md: 9, xs: 7},
              textAlign: 'center' }}
            >
              <Typography variant="h2" component="div">Наши преимущества</Typography>
              <Typography variant="body1" component="div">Чем мы лучше от наших конкурентов?</Typography>
            </Box>

            <Stack
              direction={{ md: 'row', xs: 'column' }}
              justifyContent='space-between'
              alignItems={{ md: 'flex-start', xs: 'center'}}
              spacing={9}
            >
              <Feature 
                img={Advantage1}
                title={<>Гарантия выполнения<br/>заданий</>}
                body='В случае невыполнения хоть одного условия  — возврат средств'
              />

              <Feature 
                img={Advantage2}
                title={<>Живое<br/>продвижение</>}
                body='Заказы выполняются реальными людьми, которые ежедневно сидят в соц. сетях.'
              />

              <Feature 
                img={Advantage3}
                title={<>Оперативная служба<br/>поддержки</>}
                body='Вежливая и быстрая Тех.Поддержка ответит на все Ваши вопросы с 8.00 до 21.00.'
              />
            </Stack>

          </Container>
        </Box>
      </div>
      
    </>
  );
}

const Feature = (props) => {
  return <Stack direction='column' alignItems='center' sx={{maxWidth: 280, m: 'auto'}}>
    <Box sx={{ mb: 4}}>
      <img src={props.img} alt="Advantage image" />
    </Box>

    <Stack direction='column' alignItems='center' sx={{textAlign: 'center'}}>
      <Typography variant="h4" component="div">{props.title}</Typography>
      <Typography variant="body1" component="div">{props.body}</Typography>
    </Stack>
  </Stack>;
};
