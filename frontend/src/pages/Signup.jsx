import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const Navigate=useNavigate();

    const handleClick=()=>{
        localStorage.setItem('user',JSON.stringify({name,email,password}));
        alert('Account created,You can now log in successfully');
        Navigate('/login');
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
      sx={{ p: 5, width: 400 ,
        alignItems:"center",
        display:"flex",
        flexDirection:"column"


      }}>
        <Typography variant="h5" gutterBottom align="center">
          Sign Up
        </Typography>
        <TextField label="Name" type="text" 
        onChange={(e)=>setName(e.target.value)}
        fullWidth sx={{m:1,
            
        }}/>
          <TextField label="Email" type="email"
          onChange={(e)=>setEmail(e.target.value)} fullWidth sx={{m:1}} />
            <TextField label="Password" type="password" 
            onChange={(e)=>setPassword(e.target.value)}fullWidth sx={{m:1}} />

        <Button variant="contained" sx={{m : 1}} onClick={handleClick}>
            Create Account
        </Button>
            <Link onClick={()=> Navigate('/login')} sx={{cursor:"pointer"}}>Already have an account</Link>
        </Paper>
    </Box>
  );
};

export default Signup;
