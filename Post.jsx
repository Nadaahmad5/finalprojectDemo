import React from "react";
import explorePic7 from "../imgs.png/explorePic7.avif"
import Singer from "../imgs.png/singer.png"
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post(){
const nn= <Box>
    <div style={{display:"flex", alignItems:"center"}}>
        <Avatar alt="Remy Sharp" src={Singer} sx={{width:"8%", hight:"9%"}}/>
        <span style={{color:"white"}}>Nada.Haj.Ahmad</span>
        <MoreVertIcon style={{marginleft:"auto", color:"white"}}/>
    </div>
    <img src={explorePic7} style={{marginTop:"10px", width:"100%"}}/>
    <div style={{display:"flex", alignItems:"center", color:"white"}}/>

    <FavoriteBorderIcon/>
    {/* <SendIcon style/>
    <Book */}
    <div>color blue represents both the sky and the sea and is associated with open spaces, freedom, intuition, imagination, inspiration, and sensitivity.</div>
</Box>
}
export default Post