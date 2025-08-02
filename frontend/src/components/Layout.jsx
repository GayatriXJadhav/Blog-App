// src/components/Layout.jsx
import React from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

// const drawerWidth = 240;

const Layout = ({ children,currentUser}) => {
  return (
    <Box sx={{ display: "flex",
     
     }}>
      {/* Top AppBar */}
      <Header />

      {/* Left Drawer */}
      <Sidebar currentUser={currentUser}/>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          //   ml: `${drawerWidth}px`,#ff7b7b
          bgcolor: '#cc9292ff'
        }}
      >
        {/* Push content below the AppBar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
