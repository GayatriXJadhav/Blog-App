import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ListBlog = () => {
    const navigate=useNavigate();


 const [blogs, setBlogs] = useState([
   {
    id: 'dummy-123',
    title: 'Dummy Blog Title',
    content: 'This is a dummy blog used for testing or placeholder purposes.',
  }
 ]);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('/api/blogs'); // no ID, get all blogs
   setBlogs([...res.data])
    } catch (err) {
      console.log('Failed to fetch blogs', err);
    }
  };
  fetchBlogs();
}, []);
 
  return (
    
 <Layout>
   <Box display="flex" flexWrap="wrap" gap={2}>
    {blogs.map((blog)=>(
        <Cards
        key={blog.id}
        title={blog.title}
        content={blog.content}
        onView={()=>console.log(`/view.${blog.id}`,{state:blog})}
        onEdit={()=>navigate(`/edit/${blog.id}`, {state:blog})}
        
        />
    ))}
   </Box>
 </Layout>
   
  )
}

export default ListBlog