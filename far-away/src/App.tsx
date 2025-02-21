import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader';

import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header />
        <SubHeader />
        <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="background.default"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Alternar para {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
