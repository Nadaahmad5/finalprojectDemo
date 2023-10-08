import { Avatar } from "@mui/material";
import React from "react";
import messengar from '../imgs.png/messengar-logo.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import nurse from "../imgs.png/nurse.png"

export default function MessagesPage() {
    return (
    <Box style={{backgroundColor:"black"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <Avatar alt="Remy Sharp" src={messengar} sx={{width:60, height:60}}/>
        <h2 style={{ color:"white"}}>Your Messages</h2>
        <h3 style={{color:"#1D1D1D"}}> Send private photos and messages to a friend or group</h3>
        <Button variant="contained" disableElevation>
      SEND MESSAGE
    </Button>


    {/* <stack>
    <Button style={{color:"white"}} size="large" src={nurse}>Large</Button>

    </stack> */}
    </div>
    <br>
    </br>
    </Box>
)
}
