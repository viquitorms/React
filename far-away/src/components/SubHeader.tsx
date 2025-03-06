import '../assets/css/Header.css'
import { Box, Button, TextField, Typography } from "@mui/material";

function SubHeader() {

    return (
        <Box className="header" sx={{ height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box display={'flex'} gap={2} sx={{ verticalAlign: "center" }}>
                <Box>
                    <TextField
                        required
                        variant='filled'
                        label="Item"
                    />
                </Box>

                <Box>
                    <TextField
                        required
                        variant='filled'
                        label="Quantity"
                    />
                </Box>

                <Box alignContent="center">
                    <Button variant="contained" sx={{ paddingX: 4, paddingY: 2 }}>
                        Add
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default SubHeader;