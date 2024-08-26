import{ useTheme }from "@mui/material/styles"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Button1 from '@mui/material/Button';
import CarouselImage from "./Carousel";
import Text from "./Text";
import Cars from "./Cars";
import CarsInformation from "./CarsInformation";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const InterFace = ({setmyMOde}) => {
    const navigate = useNavigate();
    const theme = useTheme()
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                                <DirectionsCarIcon fontSize='large'/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            AE
                        </Typography>
                        <Button color="inherit" sx={{marginRight: "10px"}}
                        onClick={() => navigate('/login')}>
                            Login
                        </Button>
                        <IconButton 
                            sx={{ml: 1}}
                            onClick={() => {
                                localStorage.setItem("currentMode" , theme.palette.mode ==="dark"? "light" : "dark")

                                setmyMOde(theme.palette.mode ==="light"?"dark":"light")
                            }}
                            color="inherit"
                        >
                            {theme.palette.mode === "dark" ?<WbSunnyIcon sx={{color:"orange"}}/> : <DarkModeIcon/> }
                        </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        <Text/>
        <CarouselImage/>
        <Cars/>
        <hr/>
        <CarsInformation/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default InterFace;








