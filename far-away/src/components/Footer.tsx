import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                bgcolor: "primary.main",
                color: "white",
                py: 2,
                textAlign: "center"
            }}
        >
            <Container>
                <Typography variant="body2">
                    You have 0 items in your list and you already packed 0 (0%)
                </Typography>
            </Container>
        </Box>
    );
}