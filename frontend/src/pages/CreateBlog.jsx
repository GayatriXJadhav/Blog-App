import React from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Layout from '../components/Layout'


const CreateBlog = () => {
  const navigate = useNavigate();
  const authorId = localStorage.getItem("user");
  const handleCreate = async (formData) => {
    try {
      await axios.post("/api/blogs", { ...formData, authorId });
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