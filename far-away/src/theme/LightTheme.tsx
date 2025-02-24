import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ff6f61" },
    secondary: { main: "#6b5b95" },
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
