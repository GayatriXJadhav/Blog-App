import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import DetailBlog from "./pages/DetailBlog";
import ListBlog from "./pages/ListBlog";
import EditBlog from "./pages/EditBlog";

import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
 
      <Route path="/" element={<ListBlog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/createBlog" element={
       <ProtectedRoute>
         <CreateBlog />
       </ProtectedRoute>

        } />

        <Route path="*" element={<Navigate to="/" />} />
      <Route path="/view/:id" element={< DetailBlog/>} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/profile" element={< Profile/>}></Route>
    </Routes>
  );
}

export default App;



