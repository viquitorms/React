import { Avatar, Button, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { useFriendsViewModel } from "./Friends.vm";
import { useState } from "react";

function Friends() {
    const { friendsWithStatus, addFriend } = useFriendsViewModel();
    const [newFriend, setNewFriend] = useState({ name: '', image: '' });

    const handleSubmit = () => {
        if (!newFriend.name || !newFriend.image) return;
        addFriend(newFriend);
    }

    return (
        <List sx={{ padding: "1rem" }}>
            {friendsWithStatus.map((friend) =>
                <ListItem key={friend.id} sx={{ gap: 2 }}>
                    <Avatar src={friend.image} />
                    <ListItemText
                        primary={friend.name}
                        secondary={friend.status}
                    />
                    <Button variant={"outlined"} size={"small"}>Select</Button>
                </ListItem>
            )}
            <Stack>
                <TextField name="name" value={newFriend.name} onChange={handleChange} />
                <TextField name="name" value={newFriend.name} onChange={handleChange} />
                <Stack sx={{ backgroundColor: "blue" }}>
                    <Button sx={{ backgroundColor: "aliceblue", width: "fit-content" }} variant={"outlined"} onClick={() => addFriend}>Add friend</Button>
                </Stack>
            </Stack>
        </List>
    );
}

export default Friends;