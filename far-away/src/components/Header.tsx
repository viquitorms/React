import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";

function Header() {
    return (
        <Box className="header" sx={{ background: 'white' }} color={'darkorange'}>
            <Box>
                <Typography variant="h3" fontWeight={'bold'}>
                    Far Away
                </Typography>
            </Box>
        </Box>
    );
}

export default Header;