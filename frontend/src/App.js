import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import DetailBlog from "./pages/DetailBlog";
import ListBlog from "./pages/ListBlog";
import EditBlog from "./pages/EditBlog";

import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/ListBlog" element={<ListBlog />} />



      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/createBlog" element={
       
        <CreateBlog />
        } />

          <Route path="*" element={<Navigate to="/" />} />
      <Route path="/view/:id" element={< DetailBlog/>} />
      <Route path="/edit/:id" element={<EditBlog />} />
    </Routes>
  );
}

export default App;
