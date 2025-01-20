import Stories from "../Components/Stories.jsx";
import Posts from "../Components/Posts.jsx";
import "../stylesheets/Home.css";


const Home = () => {


  return (
    <div className="home"> 
  
      <Stories/>
      <Posts/>
      
    </div>
      
  );
};

export default Home;