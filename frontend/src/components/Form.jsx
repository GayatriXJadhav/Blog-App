import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Form = ({ initD = {title:"",content:""}, onSubmit, formType }) => {
    const [formData, setFormData] = useState({ title: "", content: "" });
    useEffect(() => {
        if (initD.title || initD.content) {
            setFormData(initD || {title:"",content:""});
        }
    }, [initD]);

      const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
        e.prevenDefault();
        onSubmit(formData);
    };
    return (
          <Box
    sx={{
      height: '100vh',         // full screen height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >


        <form onSubmit={handleSubmit}>
         
                <Paper
                    sx={{
                         height: "auto",
                            width: "800px",
                            margin: "auto",
                            padding: 4,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 40,
                            textAlign: "center",
                            p: 2,
                        }}
                    >
                        {formType} Blog
                    </Typography>

                    <TextField
                        label="Title"
                        type="text"
                       id="outlined-multiline-static"
                       
                        value={formData.title}
                        onChange={handleChange
                        }
                        sx={{ m: 1 }}
                    />
                    <TextField
                        type="text"
                        id="outlined-multiline-static"
                        label="Multiline Placeholder"
                        

                         
                        value={formData.content}
                        onChange={handleChange
                        }
                        fullWidth
                        multiline
                        sx={{ m: 1, overflow: "auto" }}
                    />
                    <Button variant="contained" type="submit">
                        {" "}
                        {formType}
                    </Button>
                </Paper>
           
        </form>
          </Box>
    );
};

export default Form;
