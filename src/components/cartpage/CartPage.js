import React, { useState, useEffect } from "react";
import { Box, Text, Image, useToast } from '@chakra-ui/react';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { cartActions } from "../../redux/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const news = useSelector(state => state.cart.data);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const sumWithInitial = news.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
      0
    );
    setSum(sumWithInitial.toFixed(2));
  }, [news]);


  const handlePay = async () => {
    if (news.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Your cart is empty",
        text: "You don't have any products in your cart.",
        customClass: {
          container: 'custom-swal-container',
          popup: 'custom-swal-popup',
          header: 'custom-swal-header',
          title: 'custom-swal-title',
          content: 'custom-swal-content',
          actions: 'custom-swal-actions',
          confirmButton: 'custom-swal-confirm-button',
        }
      });
      return;
    }
  
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User ID not found. Please log in again.",
        customClass: {
          container: 'custom-swal-container',
          popup: 'custom-swal-popup',
          header: 'custom-swal-header',
          title: 'custom-swal-title',
          content: 'custom-swal-content',
          actions: 'custom-swal-actions',
          confirmButton: 'custom-swal-confirm-button',
        }
      });
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/sales/add/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer: userId,
          products: news
        })
      });
  
      const responseData = await response.json();
  
      if (response.status === 201) {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "The purchase was successful",
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            header: 'custom-swal-header',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            actions: 'custom-swal-actions',
            confirmButton: 'custom-swal-confirm-button',
          }
        });
        dispatch(cartActions.clearItems());
        navigate(-1);
      } else if (response.status === 400) {
        // Handle insufficient quantity
        Swal.fire({
          icon: "error",
          title: "Purchase failed",
          text: responseData.quantity || "The purchase failed.",
          customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            header: 'custom-swal-header',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            actions: 'custom-swal-actions',
            confirmButton: 'custom-swal-confirm-button',
          }
        });
      } else {
        console.error('Error while making purchase:', responseData.error || "Unknown error");
        Swal.fire({
          icon: "error",
          title: "Purchase failed",
          text: responseData.error || "The purchase failed",
          customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            header: 'custom-swal-header',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            actions: 'custom-swal-actions',
            confirmButton: 'custom-swal-confirm-button',
          }
        });
      }
    } catch (error) {
      console.error('Error while making purchase:', error);
      Swal.fire({
        icon: "error",
        title: "Purchase failed",
        text: "An error occurred while making the purchase",
        customClass: {
          container: 'custom-swal-container',
          popup: 'custom-swal-popup',
          header: 'custom-swal-header',
          title: 'custom-swal-title',
          content: 'custom-swal-content',
          actions: 'custom-swal-actions',
          confirmButton: 'custom-swal-confirm-button',
        }
      });
    }
  };
  

  const handleDeleteItem = (itemId) => {
    dispatch(cartActions.deleteItem(itemId));
  };

  const increaseQuantity = (itemId) => {
    dispatch(cartActions.increaseQuantity(itemId));
  };

  const decreaseQuantity = (itemId) => {
    dispatch(cartActions.decreaseQuantity(itemId));
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {news.map((item) => (
          <div key={item.id} width="45%" marginBottom="20px">
            <div rounded="lg" overflow="hidden" boxShadow="md">
              <div position="relative" width="100%" paddingBottom="100%" overflow="hidden">
                <img
                  src={`http://127.0.0.1:8000${item.image_path}`}
                  alt="image"
                  objectFit="cover"
                  width="50%"
                  height="50%"
                  position="absolute"
                  top="0"
                  left="0"
                  style={{ margin: "50px", width: '400px', height: '400px', boxShadow: "5px 5px 30px 1px #2196f3", borderRadius: "15px" }}
                />
              </div>
              <div p={4}>
                <p color="amber.500" fontSize="16px" fontWeight="bold" style={{ textAlign: "center" }}>
                  {item.name}
                </p>
                <p color="amber.500" fontSize="16px" fontWeight="bold" style={{ textAlign: "center" }}>
                  {item.price} $
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IconButton onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                    <RemoveIcon />
                  </IconButton>
                  <Text mx={2}>{item.quantity}</Text>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                </div>
                <Button
                  sx={{ marginLeft: "40%" }}
                  onClick={() => handleDeleteItem(item.id)}
                  backgroundColor="amber.500"
                  mt={2}
                  variant="contained"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div textAlign="center" mt={4}>
        <Button sx={{ marginLeft: "44%", marginTop: "10px" }}
          variant="contained"
          onClick={handlePay}
          backgroundColor="amber.500"
        >
          {"Buy " + sum}
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
