import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props) =>{
    // console.log(props);
    const {confirmed, recovered, deaths, lastUpdate} = props.data;
    if(!confirmed)
    {   return 'Loading..';}
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify ="center" >
                <Grid item component ={Card} xs={12} md={3} className ={cx(styles.card,styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration ={2.0} separator ="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body1">Number of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className ={cx(styles.card,styles.recovered)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration ={2.0} separator ="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body1">Number of recovered cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className ={cx(styles.card,styles.deaths)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration ={2.0} separator ="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body1">Number of deaths due to covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;
