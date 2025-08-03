import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BASE_URl from '../config'
import { useAuth } from '../context/AuthContext'

const ListBlog = () => {
    const navigate=useNavigate();

 const {user:currentUser}=useAuth();
 const [blogs, setBlogs] = useState([
   {
    id: 'dummy-123',
    title: 'Dummy Blog Title',
    content: 'This is a dummy blog used for testing or placeholder purposes.',
  }
 ]);
 const [Loading,setLoading]=useState(true);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URl}/api/blogs `); // no ID, get all blogs
      if (res.data?.content?.length) {
      setBlogs(res.data.content);
     }

    } catch (err) {
      console.log('Failed to fetch blogs', err);
    }

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
        <Cards blogType="List"
        key={blog.id}
        title={blog.title}
        content={blog.content}
        onView={()=>navigate(`/view/${blog.id}`,{state:blog
          
        })}
      //   onEdit={
      //     currentUser && blog.authorId===currentUser.id?
      //  ()=>navigate(`/edit/${blog.id}`, {state:blog}) : undefined}
      //   showEdit={currentUser && blog.authorId===currentUser.id}
      // onEdit={ ()=>navigate(`/edit/${blog.id}`, {state:blog})}
        />
    ))}
   </Box>
 </Layout>
   
  )
}
export default ListBlog
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sapiente in neque, repellat aspernatur, totam reiciendis autem beatae odio quibusdam nobis amet hic consequuntur voluptatum, architecto omnis perferendis quos culpa alias. Iusto, ipsum expedita et at ea nulla, itaque perspiciatis maiores rerum commodi magnam mollitia ipsa aliquid animi temporibus non vel distinctio quia aperiam quo a! Fugit unde deserunt aperiam vero hic inventore illum in alias consequatur odio optio cum ullam reprehenderit voluptate consectetur aspernatur, saepe provident sunt quas ex ipsam culpa ea! Doloremque dolor amet maiores provident? Odit dolorum id sed soluta animi molestias eligendi explicabo molestiae voluptate voluptatem?
