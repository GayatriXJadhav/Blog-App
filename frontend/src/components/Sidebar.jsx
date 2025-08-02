// src/components/Sidebar.jsx
import React, { useEffect } from "react";
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

// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

const drawerWidth = 240;

const Sidebar = ({currentUser}) => {
  const navigate = useNavigate();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navItems = [
    { name: 'Listings', path: '/' },
    { name: 'Login', path: '/Login' },
    { name: 'Signup', path: '/Signup' },
    { name: 'CreateBlog', path: '/createBlog' }
  ];
  const handleNavigation = (path) => {
    navigate(path);
  }

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
          // display:"flex",
          // flexDirection:"column",
          // alignItems:"left"
        }}>
          <List>


            {navItems
              .filter((item) => {
                if (currentUser && (item.name === 'Login' || item.name === 'Signup')) {
                  return false;
                }
                if(!currentUser && (item.name==='CreateBlog')){
                  return false;
                }
                return true;
              })
              .map((text) => (
                <ListItem

                  key={text} disablePadding>
                  <ListItemButton
                    key={text.name}
                    onClick={() => handleNavigation(text.path)}>
                    <ListItemText primary={text.name} />
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
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
