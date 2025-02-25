import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";
import ThemeSlider from '../theme/ThemeSlider';

interface IHeader {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

function Header(props: IHeader) {
    return (
        <header className="header">
            <Box color='secondary'>
                <Typography variant="h4" color='main'>
                    Far Away
                </Typography>
            </Box>
            <ThemeSlider isDarkMode={props.isDarkMode} toggleTheme={props.toggleTheme} />
        </header>
    );
}

export default Header;