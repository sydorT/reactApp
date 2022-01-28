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
      laptop: 1024,
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
      color: '#232323',
      marginLeft: 32
    }
  },
  palette: {
    primary: {
      main: '#737373'
    },
    secondary: {
      main: '#232323'
    },
    accent: '#9C42E2'
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
          padding: '14px 42px',
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