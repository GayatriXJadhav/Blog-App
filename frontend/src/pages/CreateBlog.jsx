import React from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BASE_URl from '../config'
// import Layout from '../components/Layout'


const CreateBlog = () => {
  const navigate = useNavigate();

  const blogerId=async()=>{
    try{
      await axios.get(`${BASE_URl}/api/login/id`,{withCredentials:true})
    }
    catch(err){
      console.log("Failed to get userid",err);
    }
  }

  const handleCreate = async (formData) => {
    try {
      await axios.post(`${BASE_URl}/api/blogs`, { ...formData, blogerId });
      navigate('/');

    }
    catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <Form onSubmit={handleCreate} formType="Create" />
    </Layout>
  )




}

export default CreateBlog