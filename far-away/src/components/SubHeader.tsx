import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";

function SubHeader() {
    return ( 
        <header className="header">
            <Box color='secondary'>
                <Typography variant="h1" color='secondary'>
                    Far Away
                </Typography>
            </Box>
        </header>
     );
}

export default SubHeader;