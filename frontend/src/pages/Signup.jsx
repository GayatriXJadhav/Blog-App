import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URl from "../config";
import { useAuth } from "../context/AuthContext";
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser}=useAuth();
  const Navigate = useNavigate();



  const handleClick = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${BASE_URl}/api/auth/register`, {
        name, email, password
      });
      if (res.status === 201) {
        setUser({name:res.data.name,email:res.data.email})
       localStorage.setItem('token',res.data.token);
        Navigate('/');
      }
    } catch (err) {
      console.log('Signed in failed', err);
    }
  }
  return (
    <Box
      component="form"
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
        <Typography variant="h5" gutterBottom align="center">
          Sign Up
        </Typography>
        <TextField label="Name" type="text"
          onChange={(e) => setName(e.target.value)}
          fullWidth sx={{
            m: 1,

          }} />
        <TextField label="Email" type="email"
          onChange={(e) => setEmail(e.target.value)} fullWidth sx={{ m: 1 }} />
        <TextField label="Password" type="password"
          onChange={(e) => setPassword(e.target.value)} fullWidth sx={{ m: 1 }} />

        <Button variant="contained" sx={{ m: 1 }} onClick={handleClick}>
          Create Account
        </Button>
        <Link onClick={() => Navigate('/login')} sx={{ cursor: "pointer" }}>Already have an account</Link>
      </Paper>
    </Box>
  );
};

export default Signup;
