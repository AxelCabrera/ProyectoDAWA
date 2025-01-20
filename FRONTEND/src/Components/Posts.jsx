import "../stylesheets/Posts.css";
import  Post_Interno from "./Post_Interno";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Posts = ({ userId }) => {
    const posts = [
        {
          id: 1,
          name: "Dayanna Perez",
          tiempo:"Hace 2 minutos",
          userId: 1,
          profilePic:
          "https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          desc: "Porque con ella todo es más fácil: motivación, apoyo, y hasta ideas geniales cuando el cerebro ya no da más. 🧠🔋",
          img: "https://www.eluniverso.com/resizer/v2/QXD4JBIP75BVHD4UKP24JZMHDA.JPG?auth=b07dda8741e2e4e34bf4496e4b6e47e625c04abc686a25dd15704721b746bf35&width=1004&height=670&quality=75&smart=true",
          likes: "17 Me Gusta", comen: "2 Cometarios", share: "1 Compartir"
          },
      
        {
          id: 2,
          name: "Universidad de Guayaquil",
          tiempo:"Hace 9 minutos",
          userId: 2,
          profilePic:
          "https://pbs.twimg.com/profile_images/1708816720616366080/eAgDw_5G_400x400.jpg",
          desc: "#EducaciónContinua || Curso Auxiliares de Enfermería.",
          img: "https://pbs.twimg.com/media/Ggsr4T2WIAAsa51?format=jpg&name=4096x4096",
          likes: "17 Me Gusta", comen: "2 Cometarios", share: "1 Compartir"
        },
        {
          id: 3,
          name: "Jessica Gomez",
          tiempo:"Hace 13 minutos",
          userId: 3,
          profilePic:
            "https://images.unsplash.com/photo-1542145748-09fd728b8668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB3aXRoJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8Mg%3D%3D",
          desc: "Concentrados y trabajando juntos para alcanzar nuestras metas académicas. 📚✏️ #EstudioEnEquipo #Superación",
          img: "https://www.ups.edu.ec/documents/20121/190281/586GYE-1.JPG/d500c2fb-6ec4-574d-f512-3c0fcc3e05d4?t=1627499993422",
          likes: "21 Me Gusta" , comen: "4 Cometarios", share: "4 Compartir"
        },
        {
          id: 4,
          name: "Michael Sanchez",
          tiempo:"Hace 27 minutos",
          userId: 4,
          profilePic:
            "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Escribimos código para solucionar problemas, pero también para crear nuevos retos. 🧩 #KeepCoding",
          img: "https://imagenes.primicias.ec/files/og_thumbnail/uploads/2024/05/26/66538af824801.jpeg",
          likes: "28 Me Gusta" , comen: "3 Cometarios", share: "9 Compartir"
        },
        {
          id: 5,
          name: "Anthony Vallejo",
          tiempo:"Hace 52 minutos",
          userId: 5,
          profilePic:
            "https://images.unsplash.com/photo-1597272420671-4252a163b0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fHwy",
          desc: "Hoy decidí tomarme un tiempo para explorar y disfrutar de los rincones más bonitos de la universidad. 📚💖",
          img: "https://radiogovea.wordpress.com/wp-content/uploads/2024/01/foto-noticia-358.jpeg",
          likes: "28 Me Gusta" , comen: "3 Cometarios", share: "9 Compartir"
        }
        
      ];

      const filteredPosts = userId ? posts.filter(post => post.userId === userId) : posts;

      return (
        <div className="posts">
          {filteredPosts.map(post => (
            <Post_Interno posts={post} key={post.id} />
          ))}
        </div>
      );
};

export default Posts;