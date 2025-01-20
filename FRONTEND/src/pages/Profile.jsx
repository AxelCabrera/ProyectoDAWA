import "../stylesheets/Profile.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../Components/Posts.jsx"

const Profile = () => {


  return (
    <div className="profile"> 
      <div className="img-profile">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" 
        className="cover-profile"/>
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" 
        className="profilePic-profile"/>
      </div>
      <div className="profile-container">
        <div className="user-info-profile">
          <div className="left-profile">
          <a className="a-profile" href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a className="a-profile" href="http://facebook.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a className="a-profile" href="http://facebook.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a className="a-profile" href="http://facebook.com">
              <LinkedInIcon fontSize="medium" />
            </a>
            
          </div>
          <div className="center-profile">
            <span className="span-nombre-profile">Dayanna Perez</span>
            <div className="info-profile">
              <div className="item-profile">
                <PlaceIcon/>
                <span className="span-icon-profile">Guayaquil</span>
              </div>
              <div className="item-profile">
                <LanguageIcon/>
                <span className="span-icon-profile">ug.edu.ec</span>
              </div>   
            </div>
            <button className="btn-follow-profile">Follow</button>
          </div>
          <div className="right-profile">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts userId={1}></Posts>

      </div>
      
    </div>
      
  );
};

export default Profile;