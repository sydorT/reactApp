import { createTheme } from "@mui/material/styles";

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
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: "46px",
      color: "#232323",
      marginBottom: 24,
      "@media (max-width: 599.98px)": {
        fontSize: 28,
        lineHeight: "36px",
      },
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "31px",
      color: "#232323",
      marginBottom: 11,
      "@media (max-width: 599.98px)": {
        fontSize: 18,
        lineHeight: "23px",
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      color: "#737373",
    },
    menuLink: {
      fontSize: 15,
      fontWeight: 500,
      marginLeft: 32,
      cursor: "pointer",
    },
    menuLinkHeader: {
      display: "inline-block",
      position: "relative",
      fontSize: 15,
      fontWeight: 500,
      marginLeft: 32,
      transition: "0.3s",
      "&:hover": {
        color: "#9C42E2",
        transform: "translateY(-3px)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        bottom: "-4px",
        height: "2px",
        left: "-2.5%",
        right: 0,
        margin: "auto",
        width: "0%",
        opacity: "0",
        borderRadius: "14px",
        backgroundColor: "#9C42E2",
        transition: "all .3s",
      },
      "&:hover&::after": {
        width: "105%",
        opacity: "1",
      },
    },
    menuLinkFooter: {
      fontSize: 15,
      fontWeight: 500,
    },
    menuLinkMobile: {
      fontSize: 20,
      fontWeight: 600,
    },
    menuLinkMobileBlue: {
      fontSize: 18,
      fontWeight: 600,
    },
    linkSmall: {
      position: "relative",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  palette: {
    primary: {
      main: "#737373",
    },
    secondary: {
      main: "#232323",
    },
    accent: "#9C42E2",
    link: "#45619D",
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
          fontSize: "15px",
          fontWeight: 500,
          padding: "10px 43px",
          borderRadius: "30px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            backgroundColor: "#9C42E2",
            "&:hover": {
              backgroundColor: "#8713e1",
            },
            color: "#fff",
          },
        },
        {
          props: { variant: "textIcon" },
          style: {
            justifyContent: "flex-start",
            padding: 0,
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
            color: "#2E2E2E",
            width: "min-content",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#9C42E2",
            },
          },
        },
        {
          props: { variant: "containedDisabled" },
          style: {
            textTransform: "none",
            backgroundColor: "#9C42E2",
            "&:hover": {
              backgroundColor: "#9C42E2",
            },
            color: "#fff",
          },
        },
      ],
    },
  },
});

export default theme;
