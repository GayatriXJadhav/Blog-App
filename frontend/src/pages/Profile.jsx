// import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Box, Paper, TextField, Typography, Grid } from "@mui/material";

import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const navigate=useNavigate();
    const {user}=useAuth();
//       const profile = {
//     name: "Gayatri Jadhav",
//     email: "gayatri@gmail.com",
//     blogs: [
//       {
//         id: 1,
//         title: "Understanding React Hooks",
//         description: "A beginner-friendly guide to useState and useEffect.",
       
//       },
//       {
//         id: 2,
//         title: "Angular vs React: Which to Choose?",
//         description: "Comparing two most popular frontend frameworks.",
//       }, 
//       {
//         id: 3,
//         title: "My Internship Experience at Roundglass",
//         description: "What I learned working on a real-world CMS project.",
       
//       },
//     ],
//   };
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
        const token=localStorage.getItem('token');
      const res = await axios.get("/api/blogs/user",
        {
            headers:{
                'Authorization':token || ''
            }
        }
      );
      
      setBlogs(res.data);
    } catch (error) {
      console.log("Error fetching profile", error);
    }
  };
 console.log(blogs);
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Layout>
      <Paper
        sx={{
          height: "auto",
          width: "800px",
          margin: "auto",
          padding: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Profile
        </Typography>

        {/* Profile Details */}
        {user && (
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              label="Name"
              value={user.name}
              InputProps={{ readOnly: true }}
              variant="filled"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={user.email}
              InputProps={{ readOnly: true }}
              variant="filled"
            />
          </Box>
        )}

        {/* Blog Details */}
        <Typography variant="h5" gutterBottom>
          Blogs Written
        </Typography>
        <Grid container spacing={2}>
          {blogs?.length > 0 ? (
              blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Cards
                  title={blog.title}
                  content={blog.content}
              onView={()=>navigate(`/view/${blog.id}`,{state:blog
          
        })}
        onEdit={ ()=>navigate(`/edit/${blog.id}`, {state:blog}) }
    //       currentUser && blog.authorId===currentUser.id?
    //    ()=>navigate(`/edit/${blog.id}`, {state:blog}) : undefined}
    //     showEdit={currentUser && blog.authorId===currentUser.id}
                  
                />
              </Grid>
            ))
          ) : (
            <Typography>No Blogs Found</Typography>
          )}
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Profile;
