import "../stylesheets/RightBar.css";


const RightBar = () => {


  return (
    <div className="right-bar"> 
    <div className="container-right-bar">
      <div className="item-rightbar-suggestion">
        <span className="span-right-bar-suggestion">Sugerencias Para Ti</span>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
            <img className="img-right-bar" src="https://pbs.twimg.com/profile_images/1252727282000695296/OgTZ9V7v_400x400.jpg" alt="" />
            <span className="span-right-bar-name">O@SIS UG</span>
          </div>
          <div className="btn-right-bar">
            <button className="btn-right-bar-seguir">Seguir</button>
          </div>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
            <img className="img-right-bar" src="https://i.scdn.co/image/ab67616d00001e024198c92ec28483da79c7894d" alt="" />
            <span className="span-right-bar-name">Ing. Juan Carlos Cedeño</span>
          </div>
          <div className="btn-right-bar">
            <button className="btn-right-bar-seguir">Seguir</button>
          </div>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Facultad_de_Ciencias_matem%C3%A1ticas_y_f%C3%ADsicas_.jpg" alt="" />
              <span className="span-right-bar-name">Facultad de Ciencias Matemáticas y Físicas </span>
            </div>
            <div className="btn-right-bar">
              <button className="btn-right-bar-seguir">Seguir</button>
          </div>
        </div>
        </div>
        <div className="item-rightbar-suggestion">
            <span className="span-right-bar-suggestion">Amigos Conectados</span>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://pbs.twimg.com/media/FNwDGf1XEBc4Y0S?format=jpg&name=large" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Brandon Moreno</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Michael Sanchez</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://pbs.twimg.com/media/GgEqMErXUAAWWzL?format=jpg&name=large" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Maria Perez</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://pbs.twimg.com/profile_images/1621657463614480385/3BnJ8YHQ_400x400.jpg" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Maximiliano Araújo</span>
                  </div>
              </div>
              
          </div>
        <div className="item-rightbar-suggestion">

        <span className="span-right-bar-suggestion">Actividades Recientes</span>
          <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://pbs.twimg.com/profile_images/1708816720616366080/eAgDw_5G_400x400.jpg" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Universidad de Guayaquil</span> 
              </p>
            </div>
            <span className="span-hora">Hace 9 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://images.unsplash.com/photo-1542145748-09fd728b8668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB3aXRoJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8Mg%3D%3D" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Jessica Gomez</span> 
              </p>
            </div>
            <span className="span-hora">Hace 13 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://pbs.twimg.com/profile_images/1820475876577804288/_10iFV8R_400x400.jpg" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Admisión y Nivelación UG</span> 
              </p>
            </div>
            <span className="span-hora">Hace 17 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://images.unsplash.com/photo-1597272420671-4252a163b0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fHwy" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Anthony Vallejo</span> 
              </p>
            </div>
            <span className="span-hora">Hace 52 min</span>
        </div>
        </div>
          
    </div>
    </div>
      
  );
};

export default RightBar;