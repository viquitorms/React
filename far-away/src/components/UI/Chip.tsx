import { Box, Button, Checkbox, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTrip } from "../../data/TripContext";

interface IChip {
    name: string,
    quantity: number,
    checked: boolean
}

export default function Chip(props: IChip) {

    const { toogleChecked, removeItem } = useTrip();

    function handleCheckedChip(name: string) {
        toogleChecked(name);
    }

    function handleRemoveChip(name: string) {
        removeItem(name);
    }

    return (
        <>
            <Box bgcolor={"gainsboro"} p={1} borderRadius={2} display={"flex"} gap={1} alignItems={"center"}>
                <Box display={'flex'} gap={2}>
                    <Checkbox value={props.checked} onChange={() => handleCheckedChip(props.name)} />
                    <Box>
                        <Box display={"flex"}>
                            <Typography fontWeight={"Bold"}>
                                Item:
                            </Typography>
                            <Typography ml={1}>
                                {props.name}
                            </Typography>
                        </Box>
                        <Box display={"flex"}>
                            <Typography fontWeight={"Bold"}>
                                Quantity:
                            </Typography>
                            <Typography ml={1}>
                                {props.quantity}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button onClick={() => handleRemoveChip(props.name)}>
                        <HighlightOffIcon />
                    </Button>
                </Box>
            </Box>
        </>
    );
}