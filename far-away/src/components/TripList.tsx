import { Box, Button, Checkbox, Chip, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CheckBox } from "@mui/icons-material";

export default function TripList() {

    var array = [
        'Toalha', 'Protetor solar', 'Óculos de sol', 'Biquíni', 'Shorts', 'Chapéu', 'Guarda-sol', 'Cadeira de praia',
        'Sunga', 'Cooler', 'Snacks', 'Livro', 'Fone de ouvido', 'Pipa', 'Canga', 'Bolsa de praia', 'Creme pós-sol',
        'Chinelo', 'Bola de futebol', 'Prancha de surfe', 'Sandália', 'Kit de mergulho', 'Câmera fotográfica', 'Caiaque',
        'Bolsa térmica', 'Manta de picnic', 'Protetor labial', 'Escova de cabelo', 'Repelente', 'Kit de primeiros socorros',
        'Cabo de carregador', 'Funda de celular', 'Água de coco', 'Luva de mergulho', 'Roupão de banho', 'Lanterna', 'Garrafa de água'
    ];


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
                        array.map(value =>
                            <Box bgcolor={"lightgray"} py={1} px={2} borderRadius={2} display={"flex"} gap={1} alignItems={"center"}>
                                <Checkbox />
                                {value}
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