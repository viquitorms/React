import '../assets/css/Header.css'
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAddItem } from '../data/TripContext';
import { useState } from 'react';

function SubHeader() {

    const { addItem } = useAddItem();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return;

        addItem({ name, quantity });
        setName("");
        setQuantity(0);
    }

    return (
        <Box className="header" sx={{ height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box display={'flex'} gap={2} sx={{ verticalAlign: "center" }}>
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
    );
}

export default SubHeader;