import { Box, Container, Typography } from "@mui/material";
import { useTrip } from "../data/TripContext";

export default function Footer() {

    const { tripList } = useTrip();

    function GetPackagePercent() {
        if (tripList.length == 0) {
            return 0;
        }
        else {
            var percent = (tripList.filter(x => x.checked).length / tripList.length) * 100;
            return parseFloat(percent.toFixed(2));
        }
    }

    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                color: "white",
                py: 2,
                textAlign: "center"
            }}
            bgcolor={"darkorange"}
        >
            <Container>
                <Typography variant="body1" fontWeight={'bold'} sx={{ color: "purple" }}>
                    You have {tripList.length} items in your list and you already packed {tripList.filter(x => x.checked).length} ({GetPackagePercent()}%)
                </Typography>
            </Container>
        </Box>
    );
}