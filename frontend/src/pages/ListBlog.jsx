import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Box, Pagination } from '@mui/material'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BASE_URl from '../config'
import { useAuth } from '../context/AuthContext'

const ListBlog = () => {
  const navigate = useNavigate();

  const { user: currentUser } = useAuth();
  const [blogs, setBlogs] = useState([
    {
      id: 'dummy-123',
      title: 'Dummy Blog Title',
      content: 'This is a dummy blog used for testing or placeholder purposes.',
      user:{
        name:'Dummy'
      }
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 0,
    totalPages: 0,
    totalEl: 0,
    pageSize: 5
  })

  const fetchBlogs = async (page = 0, size = 5) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URl}/api/blogs`
        , {
          params: {

            page,
            size,
            sort: 'dateCreated,desc'
          }
        }); // no ID, get all blogs
      console.log(res);
      if (res.data) {

        setBlogs(res.data.content || []);
        setPageInfo({
          currentPage: res.data.number,
          totalPages: res.data.totalPages,
          totalEl: res.data.totalElements,
          pageSize: res.data.size
        })
      }

    } catch (err) {
      console.log('Failed to fetch blogs', err);
    }
    finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchBlogs();
  }, []);

  const pageChange = (event, newPage) => {
    fetchBlogs(newPage - 1);
  }
  console.log(blogs);

  if (loading && blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (

    <Layout currentUser={currentUser}>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {blogs.map((blog) => (
          <Cards blogType="List"
            key={blog.id}
            title={blog.title}
            content={blog.content}
            authorname={blog.user.name}
            onView={() => navigate(`/view/${blog.id}`, {
              state: blog

            })}
          //   
          />
        ))}
        {pageInfo.totalPages > 0 &&
          <Box 
         
                  position= 'fixed'
                  bottom={0}
                  left={0}
                  width= "100%"
                  display= "flex"
                  justifyContent= "center"
                  bgcolor= "white"
                  py= {2}            
                  zIndex= {1000}  
                 
          >
            <Pagination count={pageInfo.totalPages}
              left={50}
              page={pageInfo.currentPage + 1}
              onChange={pageChange}
              variant="outlined" color="secondary"
             
               />
          </Box>
        }
      </Box>
      
    </Layout>

  )
}
export default ListBlog

 // display="flex"
          //  justifyContent="center" 
          //   mt={4}