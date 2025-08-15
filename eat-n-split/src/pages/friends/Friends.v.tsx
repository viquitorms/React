import { List, ListItem, ListItemText } from "@mui/material";
import { useFriendsViewModel } from "./Friends.vm";
function Friends() {
    const { friendsWithStatus } = useFriendsViewModel();

    return (
        <List>
            {friendsWithStatus.map((friend) =>
                <ListItem key={friend.id}>
                    <ListItemText
                        primary={friend.name}
                        secondary={friend.status}
                    />
                </ListItem>,
            )}
        </List>
    );
}

export default Friends;