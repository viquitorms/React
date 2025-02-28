import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";
import ThemeSlider from '../theme/ThemeSlider';

interface IHeader {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

function Header(props: IHeader) {
    return (
        <Box className="header" color={'dark'}>
            <Box>
                <Typography variant="h4" color='primary.main'>
                    Far Away
                </Typography>
            </Box>
            <ThemeSlider isDarkMode={props.isDarkMode} toggleTheme={props.toggleTheme} />
        </Box>
    );
}

export default Header;