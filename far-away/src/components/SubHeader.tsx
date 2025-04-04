import '../assets/css/Header.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useTrip } from '../data/TripContext';
import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';

function SubHeader() {

    const { tripList, addItem } = useTrip();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [checked, setChecked] = useState(false);

    const [sortBy, setSortBy] = useState(0);
    const [sortDirection, setSortDirection] = useState(0);

    const textFieldName = useRef<HTMLInputElement>(null);
    const textFieldQuantity = useRef<HTMLInputElement>(null);

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
            textFieldName.current?.focus();
            return false;
        }

        if (tripList.some(item => item.name.toUpperCase() === name.toUpperCase())) {
            alert(`O item [${name.toUpperCase()}] já existe na lista.`);
            textFieldName.current?.focus();
            return false;
        }

        if (quantity === 0) {
            alert("O valor não pode ser 0.");
            textFieldQuantity.current?.focus();
            return false;
        }

        return true;
    }

    const handleSortBy = (event: SelectChangeEvent<number>) => {
        setSortBy(Number(event.target.value));
    };

    const handleSortDirection = (event: SelectChangeEvent<number>) => {
        setSortDirection(Number(event.target.value));
    };

    function sortList(sortBy: number, sortDirection: number) {
        const sortedList = [...tripList].sort((a, b) => {
            if (sortBy === 0) {
                // Ordenação por quantidade
                return sortDirection === 0 ? a.quantity - b.quantity : b.quantity - a.quantity;
            } else {
                // Ordenação por nome
                return sortDirection === 0 ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            }
        });
    }

    return (
        <Box display={'flex'} justifyContent={"space-between"}>
            <Box>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'Bold' }}>
                        What do you need for your trip?
                    </Typography>
                </Box>
                <Box display={'flex'} gap={2}>
                    <Box>
                        <TextField
                            ref={textFieldName}
                            required
                            variant='filled'
                            label="Item"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>

                    <Box>
                        <TextField
                            ref={textFieldQuantity}
                            required
                            variant='filled'
                            label="Quantity"
                            value={quantity}
                            type='number'
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </Box>

                    <Box alignContent="center">
                        <Button variant="contained" sx={{ paddingX: 4, paddingY: 2 }} onClick={handleSubmit}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box display={"flex"} gap={2}>
                <Box width={300}>
                    <FormControl fullWidth>
                        <InputLabel id="select-sortBy">Sort by</InputLabel>
                        <Select
                            fullWidth
                            labelId="select-sortBy"
                            variant="filled"
                            value={sortBy}
                            onChange={handleSortBy}
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
                            onChange={handleSortDirection}
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