import React from "react";
import Grid from '@mui/material/Grid';
import Middle from "./Middle";
import Nada from './Nada'

function ThirdPage(){
    return(
        <div>
            <Grid container spacing={2}>
        <Grid item xs={2.5}>
            <Nada/>
            </Grid>
            <Grid item xs={5}>
                
                
            </Grid>
            <Grid item xs={4}></Grid>
            </Grid>
        </div>
    )
}
export default ThirdPage