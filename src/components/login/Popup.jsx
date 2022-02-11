import { styled } from '@mui/material/styles';
import { Dialog, useTheme, useMediaQuery } from "@mui/material";

const AuthDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '30px',
    margin: '32px 0',
    padding: 0,
    maxHeight: 'calc(100% - 64px)',
    '@media (max-width: 599.98px)': {
      height: '100%',
      margin: 0,
      borderRadius: 0,
      boxShadow: 'none',
      overflowY: 'scroll',
      maxHeight: '100%',
      width: '100%'
    },
  },
  '&.MuiModal-root.MuiDialog-root': {
    '@media (max-width: 599.98px)': {
      top: '80px',
    },
  },  
  '& .MuiButton-startIcon': {
    margin: '0 4px 0 0',
    flexShrink: '0',
  },
  '& .MuiDialogContent-root': {
    padding: '20px 55px 48px',
    overflowY: 'auto',
    zIndex: '1',
    '@media (max-width: 599.98px)': {
      padding: '0px 51px 30px',
    },
  },
  '& .MuiButtonBase-root.MuiButton-root': {
    marginTop: '16px',
  },
}));

const Popup = (props) => {
  const theme = useTheme();
  const mediaSm = useMediaQuery(theme.breakpoints.down("sm"));

  return <AuthDialog
      hideBackdrop={mediaSm}
      disableEscapeKeyDown
      open={props.open}
      onClose={props.onClose}
      transitionDuration={0}
      scroll='paper'
      sx={{
        maxWidth: {sm: `${props.maxWidth}`, xs: '100%'},
        margin: 'auto'
      }}
    >
      {props.children}
  </AuthDialog>;
};

export default Popup;