import { Avatar, Button, IconButton, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { useFriendsViewModel } from "./Friends.vm";
import { useState, type ChangeEvent } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Friends() {
    const { friendsList, addFriend } = useFriendsViewModel();
    const [newFriend, setNewFriend] = useState({ name: '', image: '' });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewFriend(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (!newFriend.name || !newFriend.image) return;
        addFriend(newFriend);
        console.log(friendsList);
        setNewFriend({ name: '', image: '' });
    }

    return (
        <List sx={{ padding: "1rem" }}>
            {friendsList.map((friend) =>
                <ListItem key={friend.id} sx={{ gap: 2 }}>
                    <Avatar src={friend.image} />
                    <ListItemText
                        primary={friend.name}
                        secondary={friend.status}
                    />
                    <Stack direction={"row"} >

                    </Stack>
                    <Button variant={"outlined"} size={"small"}>Select</Button>
                    <IconButton size={"small"} onClick={() => handleSubmit()}><DeleteIcon /></IconButton>
                </ListItem>
            )}
            <Stack direction={{ xs: 'column', sm: 'column' }} spacing={1}>
                <TextField label="Name" name="name" value={newFriend.name} onChange={handleChange} />
                <TextField label="Image" name="image" value={newFriend.image} onChange={handleChange} />
                <Stack direction={'row'} spacing={1}>
                    <Button sx={{ backgroundColor: "aliceblue", width: "fit-content" }} variant={"outlined"} onClick={() => handleSubmit()}>Add friend</Button>
                </Stack>
            </Stack>
        </List>
    );
}

export default Friends;