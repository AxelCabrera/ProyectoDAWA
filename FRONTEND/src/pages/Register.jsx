import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Register.css";
import axios from "axios";


const Register = () => {
  const [username, setUsername] = useState('')
  const [userMail, setUserMail] = useState('')
  const [password, setPassword] = useState('')
    
  const navigate = useNavigate();

  function handleSubmit(event){
      event.preventDefault();
  }

  const registerUser = () => {
      axios.post('http://localhost:5000/register/user',{
        register_user: username,
        register_mail: userMail,
        register_password: password
      })
      .then(function(response){
          console.log(response);
          navigate("/login")
      })
      .catch(function(error){
          console.log(error, 'error');
          if(error.response.status == 401){
              alert("Registro invalido");
          }
      })
  }
  
  return (
    <div className="register">
      <div className="card-register" onSubmit={handleSubmit}>
        <div className="left">
          <h1 className="title-register">AlumniUG</h1>
          <p>
            Regístrate ahora para interactuar con estudiantes y profesores, y participa en 
            una red dinámica y colaborativa.</p>
            <p>Completa el formulario de registro y sé parte de nuestra 
            comunidad universitaria en línea.</p>
          <span className="span-pregunta">Ya tienes una cuenta?</span>
          <Link to="/login">
          <button className="btn-register-login">Iniciar Sesión</button>
          </Link>
        </div>
        <div className="right">
        <img className="register-ug-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/LogoUGcolor.png"  alt="" />
          <h1 className="right-register">Regístrate</h1>
          <form className="form-right" onSubmit={registerUser}>
            <input type="text" placeholder="Nombre" 
              onChange={e => {
                setUsername(e.target.value)
              }}            
            />
            <input type="email" placeholder="Correo"
              onChange={e => {
                setUserMail(e.target.value)
              }}
            />
            <input type="password" placeholder="Contraseña" 
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
            <button type="submit" className="btn-register-registrarse" >Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;