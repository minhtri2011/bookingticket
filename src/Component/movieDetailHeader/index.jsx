import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function MovieDetailHeader() {
    return (
        <div className="banner">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img style={{height: '400px', width:'300px'}} src="./img/car/2f880ef2e1761ec234bf68cba9e7f3bb.jpg" alt="a"/>
                </Grid>
                <Grid item xs={8}>3</Grid>
            </Grid>
        </div>
    )
}
