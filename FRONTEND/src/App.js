import './App.css';
import React from "react";
import Login from './pages/Login.jsx';
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./Components/NavBar.jsx" 
import LeftBar from "./Components/LeftBar.jsx" 
import RightBar from "./Components/RightBar.jsx" 
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Ruta inicial que muestra el login */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Layout />}>
            {/* Rutas internas de la aplicación */}
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
