import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";

function Header() {
    return (
        <Box className="header" >
            <Box>
                <Typography variant="h4" >
                    Far Away
                </Typography>
            </Box>
        </Box>
    );
}

export default Header;