import React, { useState } from 'react'
import { Box, Paper, TextField, Typography, Button,Link } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

import axios from 'axios';
import BASE_URl from '../config';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleClick = async () => {
    try {

      const res = await axios.post(`${BASE_URl}/api/auth/login`, {
        email,
        password,
      });
      if (res.status === 200) {
       
        navigate('/')
      }
      else{
        navigate('/signup')
      }

    } catch (err) {
      console.log('Error to login', err);
    }
 console.log('Error to login');
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3}
        sx={{
          p: 5, width: 400,
          alignItems: "center",
          display: "flex",
          flexDirection: "column"


        }}>
        <Typography variant='h5' gutterBottom align='center'>Login</Typography>
        <TextField label="Email" type="email" fullWidth sx={{ m: 1 }} 
        onChange={(e)=>setEmail(e.target.value)}/>
        <TextField label="Password" type="password" fullWidth sx={{ m: 1 }} 
         onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" sx={{ m: 1 }} onClick={handleClick} >

          Login


        </Button>
       <Link onClick={()=>navigate('/signup')}  sx={{ cursor: "pointer" }}>New to the Account</Link>
      </Paper>
    </Box>
  )
}

export default Login