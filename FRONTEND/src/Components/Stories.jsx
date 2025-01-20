import "../stylesheets/Stories.css";


const Stories = () => {

    const stories = [
        {
          id: 1,
          name: "Admisión y Nivelación UG",
          img: "https://pbs.twimg.com/media/GZddPJiXwAADpLo?format=jpg&name=large",
        },
        {
          id: 2,
          name: "Marina Soler",
          img: "https://i.pinimg.com/550x/a5/26/d6/a526d644080c88137df652d404fc8c71.jpg" ,
        },
        {
          id: 3,
          name: "Ramiro Valle",
          img: "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          name: "Pedro Merino",
          img: "https://pbs.twimg.com/media/GfGckNBXUAAWtUD?format=jpg&name=large",
        },
        
      ];

    return (
      <div className="stories"> 
      <div className="story">
                <img className="img-stories" src="https://imagenes.expreso.ec/files/image_440_279/uploads/2021/02/17/602d559ce215c.jpeg" alt="" />
                <span className="span-stories">Tus Stories</span>
                <button className="btn-stories">+</button>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id} >
                <img className="img-stories" src={story.img} alt="" />
                <span className="span-stories">{story.name}</span>
            </div>
        ))}
      </div>
        
    );
  };
  
export default Stories;