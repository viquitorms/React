import '../assets/css/Header.css'
import { Box, Button, TextField, Typography } from "@mui/material";

function SubHeader() {

    return (
        <Box className="header" sx={{ backgroundColor: 'primary.main', height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" color='primary.light' sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box display={'flex'} gap={2}>
                <TextField
                    label="Number"
                    type="number"
                    color="primary.light"
                />
                <TextField
                    label="Item"
                    type="text"
                    color="primary.light"
                />
                <Button
                    content='Button'
                    variant="contained"
                    color="secondary.light"
                >
                    Adiconar
                </Button>
            </Box>
        </Box>
    );
}

export default SubHeader;