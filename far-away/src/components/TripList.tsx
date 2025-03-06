import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
            justifyContent: "space-between",
            height: "35rem",
            padding: 5
        }}>
            <Box display={"flex"} flexDirection={"row"} gap={2} flexWrap={"wrap"} height={10}>
                {
                    array.map(value =>
                        <Chip sx={{ backgroundColor: "cadetblue", color: "white" }} label={value} icon={<HighlightOffIcon color="white" />} />
                    )
                }
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
                                    <KeyboardArrowUpIcon />
                                    <span>Ascending</span>
                                </MenuItem>
                                <MenuItem value={1}>
                                    <KeyboardArrowDownIcon />
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