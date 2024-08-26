// login.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoginIcon from '@mui/icons-material/Login';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const checkUser = async () => {
    // let url = 'http://192.168.1.94:8000/api/customers/check-user/';
    let url = process.env.REACT_APP_URL_API + 'customers/check-user/';
    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    let response = await fetch(url, options);
    if (response.ok) {
      let data = await response.json();
      localStorage.setItem('user_id', data.id); // Save user ID to local storage
      navigate('/list');
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "check your username and password",
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

  return (
    <>
    
    <ReplyAllIcon 
        sx={{cursor: "pointer",color:"#2196f3",margin:"10px"}}
        onClick={() => {
          navigate('/')
        }}
    />
      <div className='main-login'>
        <div>
          <h2 className='text-login'>Login</h2>
        </div>
        <div>
          <div className='input-login'>
            <input
              type="text"
              placeholder='username'
              className='input-user'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <br />
            <input
              type="password"
              placeholder='password'
              className='input-password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <br />
            <Button variant='contained' className='btn-login' onClick={checkUser}>
              Login <LoginIcon />
            </Button>
            <p className='p-login'>
              If you don't have an account<br />
              click the button in bottom
            </p>
            <Button variant='contained' className='btn-create-account'
              onClick={() => navigate('/newaccount')}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
