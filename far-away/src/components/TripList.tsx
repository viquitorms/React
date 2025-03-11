import { Box, Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";

interface ITripList {
    name: string,
    quantity: number
}

export default function TripList() {

    const [tripList, setTripList] = useState<ITripList[]>([]);

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
                            <Box bgcolor={"lightgray"} py={1} px={2} borderRadius={2} display={"flex"} gap={1} alignItems={"center"}>
                                <Checkbox />
                                {value.name}
                                <HighlightOffIcon />
                            </Box>
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