
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Paper, Typography } from '@mui/material'
import BASE_URl from '../config'
const DetailBlog = () => {
    const { id } = useParams();
    
  const location=useLocation();
  const passedBlog=location.state;
  const [blog, setBlog] = useState(passedBlog);
    useEffect(() => {
        if(!passedBlog){
          const fetchblog = async () => {

                try {
                    const res = await axios.get(`${BASE_URl}/api/blogs/${id}`);
                    setBlog(
                        {
                            title: res.data.title,
                            content: res.data.content
                        });
                }
                catch (err) {
                    console.log('No data found', err);
                }
            }
           fetchblog();
        }
    }, [id,passedBlog])
 
    if (!blog) return <div>Loading...</div>;
    return (
        <Layout>
      <Box display="flex" justifyContent="center" mt={4}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: '800px',height:500 }}>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body1">{blog.content}</Typography>
        </Paper>
      </Box>
    </Layout>
    )
}

export default DetailBlog


