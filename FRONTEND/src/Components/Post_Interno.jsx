import "../stylesheets/Post_Interno.css";
//import Posts from "./Posts.jsx"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "./Comments.jsx";
import { useState } from "react";


const Post_Interno = ({ posts }) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

    return(
        <div className="post-interno">
          <div className="container-post-int">
          <div className="user-post-int">
            <div className="user-info-post-int">
              <Link to='/home/profile/'>
              <img className="img-post-int" src={posts.profilePic} alt="" />
              </Link>
              <div className="detalle-post-int">
                <Link to='/home/profile/' style={{ textDecoration: "none", color: "inherit" }}>
                  <span className="nombre-post-int">{posts.name} </span>  
                </Link>
                <span className="fecha-post-int">{posts.tiempo}</span>
              </div>
            </div>
            <MoreHorizIcon/>
          </div>
          <div className="content-post-int">
            <p>{posts.desc}</p>
            <img className="img-content-post-int" src={posts.img} alt="" />
          </div>
            <div className="info-post-int">
              <div className="item-post-int">
                {liked ?  <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> }
                {posts.likes} 
              </div>
              <div className="item-post-int" onClick={()=>setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon/>
                {posts.comen} 
              </div>
              <div className="item-post-int">
                <ShareOutlinedIcon/>
                {posts.share} 
              </div>
            </div>
            {commentOpen && <Comments/>}
          </div>
        </div>
    )
    
        
 
  };
  
export default Post_Interno ;