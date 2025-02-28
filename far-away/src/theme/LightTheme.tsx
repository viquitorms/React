import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { light: "#bbdefb", main: "#90caf9", dark: "#1565c0" },
    secondary: { light: "#dcedc8", main: "#9ccc65", dark: "#558b2f" },
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
