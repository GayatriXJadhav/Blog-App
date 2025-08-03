// src/components/Sidebar.jsx
import React from "react";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  // Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

const drawerWidth = 240;

const Sidebar = () => {
  const { user: currentUser,logout} = useAuth();  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    logout();
    handleClose();
    navigate('/');
  };
  const navItems = [
    { name: 'Listings', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
    { name: 'CreateBlog', path: '/createBlog' }
  ];
  const handleNavigation = (item) => {
    if(!currentUser && item.name==='CreateBlog'){
     navigate('/login');
     return;
    }
    navigate(item.path);
  }
  const filteredNavItems = navItems.filter((item) => {
    // Hide Login/Signup when logged in
    if (currentUser && (item.name === 'Login' || item.name === 'Signup')) {
      return false;
    }
    return true;
  });


 

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#f4e0e0ff",
          },
        }}
      >
        <Toolbar />
        <Box sx={{
          overflow: "auto",
          
        }}>
          <List>
            {filteredNavItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton onClick={() => handleNavigation(item)}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
          {
            currentUser && (
              <>

                <Button
                  sx={{
                    color: "black",
                  }}
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Menu
                </Button>

                <Menu
                  id="fade-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "fade-button",
                    },
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                // TransitionComponent={Fade}
                >
                  <MenuItem onClick={()=>{navigate('/profile/');
                    handleClose();
                  }}>Profile</MenuItem>
                 
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )

          }
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
                    
                   

