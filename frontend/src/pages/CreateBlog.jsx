import React from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BASE_URl from '../config'
// import Layout from '../components/Layout'


const CreateBlog = () => {
  const navigate = useNavigate();

 

  const handleCreate = async (formData) => {
    try {
      const token=localStorage.getItem('token');
      await axios.post(`${BASE_URl}/api/blogs`,formData,{
        headers:{
          'Authorization':token || ''
        }
      });
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