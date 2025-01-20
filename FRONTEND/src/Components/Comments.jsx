import "../stylesheets/Comments.css"
const Comments = () =>{

    const comments = [
        {
          id: 1,
          desc: "¡Vamos, equipo! La dedicación de hoy será el éxito de mañana. 📖✨",
          name:"Juan Perez",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Momentos como estos son los que hacen la vida especial. ¡Qué lindo grupo! 😊",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            desc: "¡Qué gran publicación! 🎉✨",
            name: "Kai Asakura",
            userId: 2,
            profilePicture:
              "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/12/UFC-310-Kai-Asakura-3.jpg?w=1024&h=576&crop=1",
          }
      ];
    return(
        <div className="comments">
            <div className="write-comments">
            <img className="img-comments" src="https://www.mmafacts.com/wp-content/uploads/2022/04/alex_pereira.png" alt="" />
            <input className="input-comments" type="text" placeholder="Escribe un comentario"/>
            <button className="btn-comments">Enviar</button>
            </div>
            {comments.map(comments=>(
                <div className="commentario">
                    <img className="img-comments" src={comments.profilePicture} alt="" />
                    <div className="info-comments">
                        <span className="span-comments">{comments.name}</span>
                        <p className="p-comments">{comments.desc} </p>
                    </div>
                    <span className="hora-comments">Hace 1 hora</span>
                </div>
            ))}
        </div>
    )
}

export default Comments;