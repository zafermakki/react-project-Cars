import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from '@mui/icons-material/Logout';
import  Button  from "@mui/material/Button";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';  // Import Badge component
import { useSelector } from "react-redux";  // Import useSelector to access Redux state
import "./boxList.css";

const ListPage = ({ setmyMOde }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const userId = localStorage.getItem('user_id'); // Retrieve user_id from local storage

  const cartItems = useSelector(state => state.cart.data); // Retrieve cart items from Redux state
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total quantity of items in the cart

  const navigateTo = (path) => {
    navigate(path, { state: { user_id: userId } });
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id'); // Remove user_id from local storage
    navigate('/login'); // Redirect to login page
  };

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
              onClick={handleLogout} // Add onClick to handle logout
            >
              <LogoutIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
              Dashboard
            </Typography>
            {/* Add a Badge component to display the cart item count */}
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon sx={{ cursor: "pointer" }}
                onClick={() => navigateTo('/cart')}
              />
            </Badge>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                localStorage.setItem("currentMode" , theme.palette.mode ==="dark"? "light" : "dark")

                setmyMOde(theme.palette.mode ==="light"?"dark":"light")
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <WbSunnyIcon sx={{ color: "orange" }} /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='main-box'>
        <div className='flex-box'>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
                <p className="title">ALL CARS</p>
                <p>Hover Me</p>
              </div>
              <div className="backSide">
                <p className="title">Browse Products</p>
                <p>Now you can browse the products, put the products you want in the cart, and then complete the purchase from the cart</p>
                <Button variant='contained'
                  onClick={() => navigateTo('/categories')}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
                <p className="title">PURCHASES</p>
                <p>Hover Me</p>
              </div>
              <div className="backSide">
                <p className="title">MY PURCHASES</p>
                <p>
                  <Button variant='contained'
                    onClick={() => navigateTo('/purchases')}
                  >
                    View
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
