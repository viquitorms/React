import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { light: "#d7ccc8", main: "#795548", dark: "#4e342e" },
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
