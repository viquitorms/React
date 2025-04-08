import '../assets/css/Header.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useTrip } from '../data/TripContext';
import { useEffect, useRef, useState } from 'react';

function SubHeader() {

    const { tripList, addItem, sortList } = useTrip();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [checked, setChecked] = useState(false);

    const [sortBy, setSortBy] = useState(0);
    const [sortDirection, setSortDirection] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (handleSubmitedContent()) {
            addItem({ name, quantity, checked });
            setName("");
            setQuantity(0);
        }
    }

    const handleSubmitedContent = () => {
        if (!name.trim()) {
            alert("O item não pode fica vazio!");
            return false;
        }

        if (tripList.some(item => item.name.toUpperCase() === name.toUpperCase())) {
            alert(`O item [${name.toUpperCase()}] já existe na lista.`);
            return false;
        }

        if (quantity === 0) {
            alert("O valor não pode ser 0.");
            return false;
        }

        return true;
    }

    useEffect(() => {
        sortList(sortBy, sortDirection);
    }, [sortBy, sortDirection]);

    return (
        <Box display={'flex'} justifyContent={"space-between"}>
            <Box>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'Bold' }} color='white'>
                        What do you need for your trip?
                    </Typography>
                </Box>
                <Box display={'flex'} gap={2}>
                    <Box>
                        <TextField
                            required
                            variant='filled'
                            label="Item"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>

                    <Box>
                        <TextField
                            required
                            variant='filled'
                            label="Quantity"
                            value={quantity}
                            type='number'
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </Box>

                    <Box alignContent="center">
                        <Button variant="contained" sx={{ paddingX: 4, paddingY: 2, background: 'purple' }} onClick={handleSubmit}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box display={"flex"} gap={2} alignSelf={'end'}>
                <Box width={300}>
                    <FormControl fullWidth>
                        <InputLabel id="select-sortBy">Sort by</InputLabel>
                        <Select
                            fullWidth
                            labelId="select-sortBy"
                            variant="filled"
                            value={sortBy}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setSortBy(value);         // atualiza o estado local
                                sortList(value, sortDirection); // chama a função do contexto com os valores corretos
                            }}
                        >
                            <MenuItem value={0}>Quantity</MenuItem>
                            <MenuItem value={1}>Item</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box width={200}>
                    <FormControl fullWidth>
                        <InputLabel id="select-direction">Direction</InputLabel>
                        <Select
                            fullWidth
                            labelId="select-direction"
                            variant="filled"
                            value={sortDirection}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setSortDirection(value);         // atualiza o estado local
                                sortList(sortBy, value);         // ordena com a nova direção
                            }}
                        >
                            <MenuItem value={0}>Ascending</MenuItem>
                            <MenuItem value={1}>Descending</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
}

export default SubHeader;