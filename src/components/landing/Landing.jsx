import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core' 
import styles from './Landing.module.css'
import CountUP from 'react-countup'


const Landing =({data:{confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3}
                className=" card shadow" style={{width:"47vh",borderRadius:"20px", margin: "0 2%",borderBottom: "7px solid blue"}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="text-primary" style={{fontFamily: "cursive",  fontWeight:"bold"}}>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUP start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" style={{fontFamily:"cursive"}}>Number of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3}className=" card shadow" style={{width:"47vh",borderRadius:"20px", margin: "0 2%",borderBottom: "7px solid green"}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="text-success" style={{fontFamily: "cursive", fontWeight:"bold"}}>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUP start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" style={{fontFamily:"cursive"}}>Number of recoveries(covid-19)</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={3}className=" card shadow" style={{width:"47vh",borderRadius:"20px", margin: "0 2%",borderBottom: "7px solid red"}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className="text-danger" style={{fontFamily: "cursive", fontWeight:"bold"}}>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUP start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" style={{fontFamily:"cursive"}}>Number of deaths(covid-19)</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing;