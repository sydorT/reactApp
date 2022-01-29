import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1228,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1072,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    h2: {
      fontSize: 46,
      fontWeight: 600,
      lineHeight: '60px',
      color: '#232323',
      marginBottom: 24,
      '@media (max-width: 599.98px)': {
        fontSize: 28,
        lineHeight: '36px',
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      color: '#737373'
    },
    menuLink: {
      fontSize: 15,
      fontWeight: 500,
      marginLeft: 32
    },
    menuLinkFooter: {
      fontSize: 15,
      fontWeight: 500
    },
    menuLinkMobile: {
      fontSize: 20,
      fontWeight: 600
    },
    menuLinkMobileBlue: {
      fontSize: 18,
      fontWeight: 600
    }
  },
  palette: {
    primary: {
      main: '#737373'
    },
    secondary: {
      main: '#232323'
    },
    accent: '#9C42E2',
    link: '#45619D'
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          fontWeight: 500,
          padding: '10px 43px',
          borderRadius: '30px'
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            backgroundColor: '#9C42E2',
            '&:hover': {
              backgroundColor: '#8713e1',
            },
            color: '#fff'
          },
        },
      ],
    },
  },
});

export default theme;