import { Box, Button, Checkbox, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTrip } from "../../data/TripContext";

interface IChip {
    name: string,
    quantity: number,
    checked: boolean
}

export default function Chip(props: IChip) {

    const { toogleChecked } = useTrip();

    function handleChipClick(name: string) {
        toogleChecked(name);
    }

    return (
        <>
            <Box bgcolor={"gainsboro"} py={1} px={2} borderRadius={2} display={"flex"} gap={1} alignItems={"center"}>
                <Box sx={{ cursor: "pointer" }}>
                    <Checkbox value={props.checked} onChange={() => handleChipClick(props.name)} />
                    <Typography>
                        {props.name} - {props.quantity}
                    </Typography>
                </Box>
                <Button>
                    <HighlightOffIcon />
                </Button>
            </Box>

        </>
    );
}