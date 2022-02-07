import React from 'react';
import { Modal, Box, useTheme, useMediaQuery } from '@mui/material';
import styles from "./Modal.module.css";

export default function BasicModal(props) {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Modal
        hideBackdrop={mediaSm}
        disableAutoFocus
        disableEscapeKeyDown
        open={props.open}
        onClose={props.onClose}
      >
        <Box className={styles.modal}>
          {props.children}
        </Box>
      </Modal>
    </div>
  );
}