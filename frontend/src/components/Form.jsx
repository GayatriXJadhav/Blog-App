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
        <form onSubmit={handleSubmit}>
            <Box
                component="main"
                sx={{
                    WebkitAlignItems:"center"
                

                }}
            >
                <Paper
                    sx={{
                        margin:"10px",
                        width:"50vw",
                        height: "50vh",

                        display: "flex",
                        flexDirection: "column",
                        p: 5,
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
                        value={formData.title}
                        onChange={handleChange
                        }
                        sx={{ m: 1, width: "auto" }}
                    />
                    <TextField
                        type="text"
                        value={formData.content}
                        onChange={handleChange
                        }
                        fullWidth
                        label="Multiline Placeholder"
                        multiline
                        sx={{ m: 1, overflow: "auto", height: "auto" }}
                    />
                    <Button variant="contained" type="submit">
                        {" "}
                        {formType}
                    </Button>
                </Paper>
            </Box>
        </form>
    );
};

export default Form;
