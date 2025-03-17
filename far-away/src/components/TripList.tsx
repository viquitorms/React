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
            padding: 5
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
            <Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Box width={300}>
                        <FormControl fullWidth>
                            <InputLabel id="select-sortBy">Sort by</InputLabel>
                            <Select fullWidth
                                labelId="select-sortBy"
                                variant="filled"
                                label="Sort list">
                                <MenuItem value={0}>Quantity</MenuItem>
                                <MenuItem value={1}>Item</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box width={200}>
                        <FormControl fullWidth>
                            <InputLabel id="select-direction">Direction</InputLabel>
                            <Select fullWidth
                                labelId="select-direction"
                                variant="filled"
                                label="Sort list">
                                <MenuItem value={0}>
                                    <span>Ascending</span>
                                </MenuItem>
                                <MenuItem value={1}>
                                    <span>Descending</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}