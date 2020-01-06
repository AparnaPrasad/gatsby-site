import React from 'react';
import VizSensor from 'react-visibility-sensor';
import { T_MainSkill } from '../constants';
import { Grid, makeStyles, Theme, createStyles, Typography, Grow } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import './appbar.module.scss';
interface Props {
    skill: T_MainSkill
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        labelWidth: {
            width: '10%'
        },
        contentWidth: {
            width: '80%'
        },
        skillLabel: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        horizontalProgressContainer: {
            padding: '10px'
        }

    })
);


const horizontalProgress = (props: Props) => {
    const { skill } = props;
    const classes = useStyles();
    const [isInViewPort, setIsInViewPort] = React.useState(false);

    return <VizSensor onChange={(vis: any) => { setIsInViewPort(vis) }} partialVisibility={true}>
        <Grid key={'progressContainer'} container spacing={1} alignItems="center" className={classes.horizontalProgressContainer}>
            <Grid key={'titleContainer'} item className={classes.labelWidth} xs={4} sm={4} md={3} lg={2} xl={2}  ><Typography key={'skill name'} className={classes.skillLabel}>{skill.name}</Typography></Grid>
            <Grid key={'lineraprogress'} item className={classes.contentWidth} xs={6} sm={6} md={7} lg={8} xl={8} >
                <Grow
                    in={isInViewPort}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(isInViewPort ? { timeout: 1500 } : {})}
                >
                    <LinearProgress
                        key='linear=progress-material'
                        //className={classes.margin}
                        variant="determinate"
                        color="primary"
                        value={skill.progress*10}
                    />
                </Grow>

            </Grid>
            <Grid key={'percent'} item className={`${classes.labelWidth} ${classes.skillLabel}`} xs={2} sm={2} md={2} lg={2} xl={2}  >{skill.progress * 10} %</Grid>
        </Grid>
    </VizSensor>
        
}

export default horizontalProgress;