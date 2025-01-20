import "../stylesheets/NavBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  //const { toggle, darkMode } = useContext(DarkModeContext);
  //const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to='/home/' style={{ textDecoration: "none" }}>
          <span className="span-logo">AlumniUG</span>
        </Link>

        <Link to='/home/' style={{color: "black"}}>
        <HomeOutlinedIcon />
        </Link>
       
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input className="input-search" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right-navbar">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user-navbar">
        <img className="img-user-navbar" src="https://images.unsplash.com/photo-1542736637-74169a802172?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          <span className="span-user-navbar">Grupo 3</span>
        </div>
        <div className="item-navbar">
          <Link to={"/login"}>
          <button className="btn-cerrar-sesion">Cerrar Sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;