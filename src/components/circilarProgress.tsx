import VizSensor from 'react-visibility-sensor';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { T_MainSkill } from '../constants';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        
        graphHeight: {
            width: '70%'
        },
      
    })
);

interface Prop {
    skill: T_MainSkill,
    color: string
}



const circularProgress = (props: Prop) => {
    const [isInViewPort, setIsInViewPort] = React.useState(false);
    //const [counter, setCounter] = React.useState(0);
    const { skill, color } = props;
    const classes = useStyles();


    

    return <VizSensor onChange={(vis) => { setIsInViewPort(vis) }} partialVisibility={true}>
        <CircularProgressbar
            className={classes.graphHeight}
            value={isInViewPort ? skill.progress : 0}
            maxValue={10}
            text={`${skill.progress / 10 * 100}%`}
            strokeWidth={3}
            styles={{
                text: {
                    fill: color,
                },
                path: {
                    // Path color
                    stroke: color,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 1s ease 0.3s',
                    // Rotate the path
                    //transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    //stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    //transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },

            }} />
    </VizSensor>
}

export default circularProgress;