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
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickEvents = ({ text }) => {
    if (text === "Create Blog") {
      if (user) {
        navigate("/createBlog");
      } else {
        navigate("/signup");
      }
    } else {
      navigate("/ListBlog");
    }
  };
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
        <Box sx={{ overflow: "auto",
          display:"flex",
          flexDirection:"column"
         }}>
          <List>
          
            {["Listings", "Create Blog"].map((text) => (
              <ListItem
              
               key={text} disablePadding>
                <ListItemButton 
               
                onClick={() => handleClickEvents(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
                  <Button
            sx={{
              color: "black",
            }}
          >
            Signup
          </Button>
          <Button
            sx={{
              color: "black",
            }}
          >
            Login
          </Button>
          
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
     
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
