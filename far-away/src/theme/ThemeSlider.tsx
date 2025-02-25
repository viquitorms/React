import { Button } from "@mui/material";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface IThemeSlider {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function ThemeSlider({ isDarkMode, toggleTheme }: IThemeSlider) {
    return (
        <Button variant="outlined" color="primary" onClick={toggleTheme}>
            {isDarkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
        </Button>
    );
}
