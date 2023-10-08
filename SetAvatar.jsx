import React from "react";
import Avatar from '@mui/material/Avatar';
import singer from '../imgs.png/singer.png'

function SetAvatar(){
    return(
        <>
        <span style={{color:'white', fontSize:"90%"}}>
            <Avatar alt="Remy Sharp" src={singer} sx={{width:"50%", hight:"80%"}}/>
            Nada.Haj.Ahmad
        </span>
        </>
    )
}
export default SetAvatar