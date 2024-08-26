import React, { useState } from 'react';
import "./newaccount.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewAccount = () => {
    const navigation = useNavigate();

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
    });

    const addUser = async () => {
        if (user.password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Password too short",
                text: "Password must be at least 8 characters long",
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

        // let url = 'http://192.168.1.94:8000/api/customers/add-user/';
        let url = process.env.REACT_APP_URL_API + 'customers/add-user/';
        let options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        let respons = await fetch(url, options);
        if (respons.status === 201) {
            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: "Your account has been created",
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
            navigation('/login');
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Username already exists",
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
        <div className='main-login'>
            <div>
                <h2 className='text-login'>Create Account</h2>
            </div>
            <form>
                <div className='input-login'>
                    <input 
                        type="text"
                        name="username"
                        placeholder='username'
                        className='input-user'
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                    <br/>
                    <input 
                        type="password"
                        name="password"
                        placeholder='password'
                        className='input'
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <br/>
                    <input 
                        type="text"
                        name="first_name"
                        placeholder='first name'
                        className='input'
                        value={user.first_name}
                        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                    />
                    <br/>
                    <input 
                        type="text"
                        name="last_name"
                        placeholder='last name'
                        className='input'
                        value={user.last_name}
                        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                    />
                    <br/>
                    <Button variant='contained' className='btn-create-account'
                        onClick={addUser}
                    >
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewAccount;
