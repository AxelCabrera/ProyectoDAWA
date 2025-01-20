import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";
import axios from 'axios';

const Login = () => {
    const [userMail, setUserMail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
    }

    const loginUser = () => {
        axios.post('http://localhost:5000/security/login',{
            login_user: userMail,
            login_password: password
        })
        .then(function(response){
            console.log(response);
            navigate("/home")
        })
        .catch(function(error){
            console.log(error, 'error');
            if(error.response.status === 401){
                alert("Credenciales invalidas");
            }
        })
    }
    
    return(
        <div className="login">
            <div className="card-login">
                <div className="left-login" onSubmit={handleSubmit}>
                    <h1 className="title-login">AlumniUG</h1>
                    <p>Te damos la bienvenida a AlumniUG, la red social exclusiva para la comunidad de la Universidad de Guayaquil.</p>
                    
                    <p>Ingresa tus credenciales para comenzar a explorar todo lo que AlumniUG tiene para ofrecerte.</p>    
                    <span className="left-span">No tienes una cuenta?</span>
                    <Link to="/register">
                    <button className="btn-register">Regístrate</button>
                    </Link>
                </div>
                <div className="right">
                    <img className="login-ug-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/LogoUGcolor.png"  alt="" />
                    <h1 className="right-title">Login</h1>
                    <div>
                        
                        <div>
                            <input type="text" placeholder="Correo Electrónico"
                            onChange={e => {
                                setUserMail(e.target.value)
                            }}
                            />
                            <input type="password" placeholder="Contraseña"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            />
                        
                            <button className="btn-login" onClick={loginUser}>Iniciar Sesión</button>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;