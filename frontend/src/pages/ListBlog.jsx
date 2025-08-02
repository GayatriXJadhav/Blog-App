import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ListBlog = () => {
    const navigate=useNavigate();

 const [currentUser, setCurrentUser] = useState(null);
 const [blogs, setBlogs] = useState([
   {
    id: 'dummy-123',
    title: 'Dummy Blog Title',
    content: 'This is a dummy blog used for testing or placeholder purposes.',
  }
 ]);
  const fetchCurrentUser = async () => {
    try {
      const res = await axios.get('/api/auth/current', { withCredentials: true });
      setCurrentUser(res.data);
    } catch (err) {
      console.error('Failed to fetch current user', err);
    }
  };
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
  fetchCurrentUser();
}, []);

  return (
    
 <Layout>
   <Box display="flex" flexWrap="wrap" gap={2}>
    {blogs.map((blog)=>(
        <Cards
        key={blog.id}
        title={blog.title}
        content={blog.content}
        onView={()=>navigate(`/view/${blog.id}`,{state:blog
          
        })}
      //   onEdit={
      //     currentUser && blog.authorId===currentUser.id?
      //  ()=>navigate(`/edit/${blog.id}`, {state:blog}) : undefined}
      //   showEdit={currentUser && blog.authorId===currentUser.id}
      onEdit={ ()=>navigate(`/edit/${blog.id}`, {state:blog})}
        />
    ))}
   </Box>
 </Layout>
   
  )
}

export default ListBlog