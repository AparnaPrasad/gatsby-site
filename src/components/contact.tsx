import React from 'react';
import { Grid, Paper, Typography, makeStyles, Theme, createStyles, Slide } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 'calc(100vh - 64px)',
            display: "flex"
        }
}));

const contact = () => {
    const styles = useStyles()
    const [isInViewPort, setIsInViewPort] = React.useState(false);


    return <VizSensor onChange={(vis: any) => { setIsInViewPort(vis) }} partialVisibility={true}>

    <React.Fragment>
        <Typography variant={'h5'} align='center'>Contact</Typography>
        <Grid container direction='column' justify='center' alignItems='center' className={styles.container}>
            <Grid item xl={7} lg={6} md={5} sm={4} xs={3}>
                    <Paper>
                            <Typography>Want to know more? Contact me </Typography>
                    </Paper>
                    <Slide in={isInViewPort} direction='down' mountOnEnter unmountOnExit style={{ transitionDelay: isInViewPort ? '1s' : '0ms' }}>
                            <Paper>
                                Here
                            </Paper>
                     </Slide>
            </Grid>
        </Grid>
        </React.Fragment>
    </VizSensor> 

}

export default contact;