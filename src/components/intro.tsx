import React from "react";
import { Grid, Typography, createStyles, makeStyles, Theme } from "@material-ui/core"
import introStyles from './intro.module.scss';
import Image from './image';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 'calc(100vh - 64px)',
            display: "flex"
        },
        intro: {
            padding: '10px'
        }
    }));


const intro = () => {
    const styles = useStyles();
    return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={`${styles.container} ${introStyles.animationArea}`}>
                <Typography variant={"h5"} key={'intro1'} className={styles.intro}>
                    Hi, I am Aparna. I am a full stack web developer
                </Typography>
                <Typography variant={"body1"} key={'intro2'} className={styles.intro}>
                        I have 4+ years of experience developing web applications.
                </Typography>
                <ul className={`${introStyles.boxArea}`}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </Grid>
        
        
}

export default intro;