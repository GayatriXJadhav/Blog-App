import React from 'react'
import {Box,Paper,TextField,Typography,Button,Link} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const Navigate=useNavigate();
   const handleClick=()=>{
    Navigate('/ListBlog')
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
        <Typography variant='h5'gutterBottom align='center'>Login</Typography>
         <TextField label="Email" type="email" fullWidth sx={{m:1}}/>
          <TextField label="Password" type="password" fullWidth sx={{m:1}}/>
          <Button variant="contained" sx={{m:1}} onClick={handleClick} >
            <Link onClick={()=>Navigate('/Listblog')}>
            Login
            </Link>
            </Button>
        
      </Paper>
    </Box>
  )
}

export default Login