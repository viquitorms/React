import '../assets/css/Header.css'
import { Typography } from "@mui/material";

function Header() {
    return ( 
        <header className="header">
            <div>
                <Typography variant="h1" color='secondary'>
                    Far Away
                </Typography>
            </div>
        </header>
     );
}

export default Header;