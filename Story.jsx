import React from "react";
import SetAvatar from "./SetAvatar";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Singer from '../imgs.png/singer.png'


// function Story(){
//     return(
//         <div style={{ width:"90%",borderColor:"", borderBottom:"solid  2px #1d1d1d"}}>
//         <br/>
//         <Stack direction="row" spacing={3} sx={{width:"90%", height:"90%"}}>
//             <SetAvatar/>
//             <SetAvatar/>
//             <SetAvatar/>
//         </Stack>
//         <br/>
//         </div>
//     )
// }
// export default Story


export default function ImageAvatars() {
    return (
        <span style={{color:'white', fontSize:"90%"}}>
      <Stack direction="row" spacing={2}>
        {/* <span style={{color:'white', fontSize:"90%"}}> */}
        <Avatar alt="Remy Sharp" src={Singer} sx={{width:"10%", hight:"10%"}}/>
        Nada.Haj.Ahmad
        <Avatar alt="Travis Howard" src={Singer} sx={{width:"10%", hight:"10%"}} />
        Nada.Haj.Ahmad
        <Avatar alt="Cindy Baker" src={Singer} sx={{width:"10%", hight:"10%"}}/>
            Nada.Haj.Ahmad
        {/* </span> */}
        {/* <Avatar alt="Remy Sharp" src={Singer} />
        <Avatar alt="Travis Howard" src={Singer} />
        <Avatar alt="Cindy Baker" src={Singer} /> */}
      </Stack>
      </span>
    );
  }