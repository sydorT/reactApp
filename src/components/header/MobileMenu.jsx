import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack direction="column" justifyContent='space-between' sx={{height: '100%', pb: 12}}>

            <Stack direction="column" spacing={4} mt={11.5} ml={8}>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Новости</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Контакты</span>
              </MenuLink>
              <MenuLink href='/' color='secondary' variant='menuLinkMobile'>
                <span className={styles.linkMobile}>Правила</span>
              </MenuLink>
            </Stack>

            <Stack 
              direction='column'
              alignItems='center'
              spacing={3}
              sx={{position: 'relative', zIndex: '1', mt: 4}}
            >
              <Button variant="contained" href="#">Вход</Button>
              <MenuLink href='/' color='link' variant='menuLinkMobileBlue'>Регистрация</MenuLink>
            </Stack>

          </Stack>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}