import { useState, useEffect } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react'; // Chakra UI components
import axios from 'axios';
import Centers from './Centers'; // Adjust path as per your project structure
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Categories = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const response = await axios.get('http://192.168.1.94:8000/api/products/categories/');
      const response = await axios.get('http://127.0.0.1:8000/api/products/categories/');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Center backgroundColor="amber.500">
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
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center", fontSize:"40px" }}>
               The Categories
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
            
      </Center>
    <div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {news.map(item => (
            <Centers key={item.id} item={item} />
            ))}
      </div>
    </div>
    </>
  );
};

export default Categories;


