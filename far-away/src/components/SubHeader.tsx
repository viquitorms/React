import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";

function SubHeader() {
    return (
        <Box className="header" sx={{ backgroundColor: 'primary.dark' }}>
            <Typography variant="54 " color='primary'>
                What do you need for your trip?
            </Typography>
        </Box>
    );
}

export default SubHeader;