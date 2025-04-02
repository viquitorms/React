import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTrip } from "../data/TripContext";
import Chip from "./UI/Chip";

export default function TripList() {

    const { tripList } = useTrip();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "space-between",
            padding: 2
        }}
        >
            <Box>
                <Box display={"flex"} gap={2} flexWrap={"wrap"}>
                    {
                        tripList.map(value =>
                            <Chip name={value.name} quantity={value.quantity} checked={value.checked} />
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
}