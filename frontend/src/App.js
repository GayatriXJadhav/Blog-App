import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import DetailBlog from "./pages/DetailBlog";
import ListBlog from "./pages/ListBlog";
import EditBlog from "./pages/EditBlog";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/ListBlog" element={<ListBlog />} />
      <Route path="/DetailBlog" element={< DetailBlog/>} />
      <Route path="/EditBlog" element={<EditBlog />} />
    </Routes>
  );
}

export default App;
