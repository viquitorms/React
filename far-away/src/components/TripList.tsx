import { Box, Select } from "@mui/material";

export default function TripList() {
    return (
        <Box sx={{ backgroundColor: "primary.dark", height: "40rem", padding: 5, color: "white" }}>
            <Box></Box>
            <Box>
                <Box>
                    <Select
                        variant="filled"
                        label="Ordenar lista"
                        sx={{ backgroundColor: "white", color: "primary.dark" }}
                    />
                </Box>
            </Box>
        </Box>
    );
}