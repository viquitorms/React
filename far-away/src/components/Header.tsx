/* CSS */
import '../assets/css/Header.css'

/* MaterialUI */
import { Typography } from "@mui/material";

function Header() {
    return ( 
        <header className="header">
            <div>
                <Typography variant="h1">
                    Far Away
                </Typography>
            </div>
        </header>
     );
}

export default Header;