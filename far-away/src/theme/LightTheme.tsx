import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#F2E7DC" },
    secondary: { main: "#012326" },
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
