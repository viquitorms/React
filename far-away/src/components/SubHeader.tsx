import '../assets/css/Header.css'
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTrip } from '../data/TripContext';
import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';

function SubHeader() {

    const { tripList, addItem } = useTrip();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [checked, setChecked] = useState(false);

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

    return (
        <Box className="header" sx={{ height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box display={'flex'} gap={2} sx={{ verticalAlign: "center" }}>
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
    );
}

export default SubHeader;