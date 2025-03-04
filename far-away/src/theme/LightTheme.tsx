import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { light: "#c5cae9", main: "#3f51b5", dark: "#283593" },
    secondary: { light: "#dcedc8", main: "#8bc34a", dark: "#558b2f" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});

export default LightTheme;
