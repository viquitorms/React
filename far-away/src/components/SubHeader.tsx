import '../assets/css/Header.css'
import { Box, TextField, Typography } from "@mui/material";

function SubHeader() {

    return (
        <Box className="header" sx={{ backgroundColor: 'primary.dark', height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" color='primary.main' sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box display={'flex'} gap={2} color='white'>
                <Box>
                    <TextField
                        required
                        variant='filled'
                        label="Item"
                        color="primary"
                    />
                </Box>

                <TextField
                    required
                    variant='filled'
                    label="standard"
                />
            </Box>
        </Box>
    );
}

export default SubHeader;