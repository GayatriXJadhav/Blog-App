import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BASE_URl from '../config'

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
 const [Loading,setLoading]=useState(true);
  const fetchCurrentUser = async () => {
    try {
      const res = await axios.get(`${BASE_URl}/api/auth`, { withCredentials: true });
      setCurrentUser(res.data);
    } catch (err) {
      console.error('Failed to fetch current user', err);
      setCurrentUser(null);
    }
  };
useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URl}/api/blogs `); // no ID, get all blogs
   setBlogs([...res.data.content])

    } catch (err) {
      console.log('Failed to fetch blogs', err);
    }
    await fetchCurrentUser();
    setLoading(false);
  };
  fetchBlogs();
}, []);
   console.log(blogs);
if(Loading){
  return <div>Loading...</div>
}

  return (
    
 <Layout currentUser={currentUser}>
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