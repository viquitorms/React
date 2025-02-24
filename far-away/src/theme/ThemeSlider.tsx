import { Box, Button } from "@mui/material";

interface IThemeSlider {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function ThemeSlider({ isDarkMode, toggleTheme }: IThemeSlider) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="background.default"
        >
            <Button variant="contained" color="primary" onClick={toggleTheme}>
                Alternar para {isDarkMode ? "Modo Claro" : "Modo Escuro"}
            </Button>
        </Box>
    );
}
