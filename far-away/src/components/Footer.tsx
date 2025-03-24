import { Box, Container, Typography } from "@mui/material";
import { useTrip } from "../data/TripContext";

export default function Footer() {

    const { tripList } = useTrip();

    function GetPackagePercent() {
        var percent = (tripList.filter(x => x.checked).length / tripList.length) * 100;
        return percent;
    }

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
                    You have {tripList.length} items in your list and you already packed {tripList.filter(x => x.checked).length} ({GetPackagePercent()}%)
                </Typography>
            </Container>
        </Box>
    );
}