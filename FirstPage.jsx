import React from "react";
import Grid from '@mui/material/Grid';
import Middle from "./Middle";
import LeftSide from "./LeftSide"

function FirstPage(){
    return(
        <div>
            <Grid container spacing={2}>
        <Grid item xs={2.5}>
            <LeftSide/>
            </Grid>
            <Grid item xs={5}>
                <Middle/>
                <br/>
                <br/>
                <br/>
            </Grid>
            {/* <Grid item xs={4}></Grid> */}
            </Grid>
        </div>
    )
}
export default FirstPage