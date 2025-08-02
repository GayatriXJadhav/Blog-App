import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BASE_URl from '../config'
const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const location=useLocation();
  const passedBlog=location.state;
  const [initD, setInitD] = useState(passedBlog);
    useEffect(() => {
        if(!passedBlog){

            const fetchblog = async () => {
                try {
                    const res = await axios.get(`${BASE_URl}/api/blogs/${id}`);
                    setInitD(
                        {
                            title: res.title,
                            content: res.content
                        });
                }
                catch (err) {
                    console.log('No data found', err);
                }
            }
           fetchblog();
        }
    }, [id,passedBlog])
    const handleUpdate = async (updatedData) => {
        try {
            await axios.put(`${BASE_URl}/api/blogs/${id}`, updatedData);
            navigate('/');

        }
        catch (err) {
            console.log('Could not update', err);
        }
    }
    console.log("EditBlog initD:", initD);
    return (
        <Layout>
            <Form initD={initD} onSubmit={handleUpdate} formType="Edit" />
        </Layout>
    )
}

export default EditBlog