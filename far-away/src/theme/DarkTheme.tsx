import { createTheme } from "@mui/material/styles";

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff4081" },
    secondary: { main: "#4a90e2" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});

export default DarkTheme;
