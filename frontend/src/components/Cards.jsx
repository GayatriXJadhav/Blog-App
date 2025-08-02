import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const Cards = ({ title, content, onView, onEdit }) => {
 

  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        boxShadow:'#292322a4 2px 2px 2px' 
      }}
    >
      <CardContent
      sx={{
        height:200
      }}
      >
        <Typography 
        sx={{
            fontSize:'20px',
            fontStyle:'italic',
            fontWeight:500,
            margin:'2px'
        }}
       
             

          >{title} </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={200} >
          {content.length > 300 ? content.slice(0, 100) + " Read More..." : content}
        </Typography>
      </CardContent>
  

      <CardActions 
      sx={{
        ml:2
      }}>
        <Button variant="contained"onClick={onView} color="#938f72ff">View</Button>

        <Button variant="contained"onClick={onEdit} color="#938f72ff">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
