import { Container, Stack, Button, Typography, Box } from '@mui/material';
import Accordion from '../../components/accordion/Accordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import styles from './HomePage.module.css';

import HeroImg from './../../images/hero-img.svg'
import SecurityImg from './../../images/security-bgr.svg'
import Advantage1 from './../../images/advantage1.svg'
import Advantage2 from './../../images/advantage2.svg'
import Advantage3 from './../../images/advantage3.svg'
import Howto1 from './../../images/howto1.svg'
import Howto2 from './../../images/howto2.svg'
import Howto3 from './../../images/howto3.svg'
import Avatar1 from './../../images/avatar1.png'
import Avatar2 from './../../images/avatar2.png'

const testimonials = [
  {
    img: Avatar1,
    name: 'Юрий Б.',
    review: 'Если нужна накрутка в Likee, причем всего – подписчиков, лайков, просмотров, репостов, комментариев, то рекомендую обращаться сюда, в Crowd Marketing. '
  },
  {
    img: Avatar2,
    name: 'Максим П.',
    review: 'Сотрудничаю с Crowd Marketing больше полугода. В Твиттере начал продвигать аккаунты только недавно. Накрутка очень помогла собрать базовую аудиторию.'
  }
]

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

      <div className={styles.reviews}>
        <Container maxWidth='lg' sx={{px: {xs: 3}}}>
          <Box sx={{
            mb: {md: 5, xs: 6},
            textAlign: 'center' }}
          >
            <Typography variant="h2" component="div">Отзывы о наших<br className={styles.hide}/>исполнителях</Typography>
            <Typography variant="body1" component="div">Вот что думают заказчики о наших исполнителях</Typography>
          </Box>

          <Swiper className={styles.swiper}
            loop={true}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: styles.bullet,
              bulletActiveClass: styles.activeBullet
            }}
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              680: {
                slidesPerView: 2,
                pagination: false,
                spaceBetween: 40
              },
            }}
          >
            {testimonials.map((card, i) => {
              return (
                <SwiperSlide key={i} className={styles.swiperslide}>
                  <div className={styles.card}>
                    <Stack direction={{ md: 'row', xs: 'column' }} alignItems={{ md: 'flex-start', xs: 'center' }}>
                      <img src={card.img} className={styles.avatarImg} alt="Person image" />

                      <Box>
                        <Typography sx={{
                          color: '#121212',
                          fontSize: {sm: 22, xs: 18},
                          fontWeight: {sm: 700, xs: 600},
                          mb: '10px'
                        }}>{card.name}</Typography>

                        <Typography sx={{
                          color: 'primary',
                          fontSize: {sm: 16, xs: 14},
                          fontWeight: 500,
                          lineHeight: {sm: '21px', xs: '18px'},
                        }}>{card.review}</Typography>
                      </Box>
                    </Stack>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </div>

      <Box sx={{maxWidth: 970, m: 'auto', mb: {md: 25, sm: 12, xs: 12}}}>
        <Container maxWidth="false">
          <Box sx={{
            mb: {md: 9, xs: 7},
            textAlign: 'center' }}
          >
            <Typography variant="h2" component="div">Ответы на вопросы</Typography>
            <Typography variant="body1" component="div">Вы нас спрашиваете - мы отвечаем!</Typography>
          </Box>

          <Accordion data={[
              {
                title:'Мой аккаунт не заблокируют?',
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consectetur vitae ut vitae quisque lorem phasellus. Vel, nisi, bibendum purus sollicitudin consectetur aliquam mi diam viverra. Ultricies diam duis nunc elementum tellus sit.'
              },
              {
                title:'Мне нужно указывать пароль от аккаунта?',
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consectetur vitae ut vitae quisque lorem phasellus. Vel, nisi, bibendum purus sollicitudin consectetur aliquam mi diam viverra. Ultricies diam duis nunc elementum tellus sit.'
              },
              {
                title:'Охваты моих публикаций не станут меньше?',
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consectetur vitae ut vitae quisque lorem phasellus. Vel, nisi, bibendum purus sollicitudin consectetur aliquam mi diam viverra. Ultricies diam duis nunc elementum tellus sit.'
              },
              {
                title:'Можно ли увидеть, что я купил подписчиков?',
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consectetur vitae ut vitae quisque lorem phasellus. Vel, nisi, bibendum purus sollicitudin consectetur aliquam mi diam viverra. Ultricies diam duis nunc elementum tellus sit.'
              }
          ]}/>
        </Container>
      </Box>
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