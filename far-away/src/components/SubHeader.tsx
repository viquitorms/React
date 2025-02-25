import * as React from 'react';
import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function SubHeader() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box className="header" sx={{ backgroundColor: 'primary.main', height: 80, justifyContent: 'center', gap: 2 }}>
            <Typography variant="body1" color='secondary.main' sx={{ fontWeight: 'Bold' }}>
                What do you need for your trip?
            </Typography>
            <Box width={200}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'secondary.main', fontWeight: 'Bold' }}>Quantity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{ color: 'secondary.main', fontWeight: 'Bold' }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}

export default SubHeader;