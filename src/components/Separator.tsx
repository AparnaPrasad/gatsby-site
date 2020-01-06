import React from "react";
import VizSensor from 'react-visibility-sensor';
//import separtorStyles from './seperator.module.scss';
import { Grid, Typography, makeStyles, createStyles, Zoom } from "@material-ui/core";
//import Brush from "@material-ui/icons/Brush";
//import mySvg from './sperator.svg';
interface Props {
    name: string
}



const useStyles = makeStyles(() =>
    createStyles({
        nameStyle: {
            textTransform: 'uppercase',
            color: '#fff'
        },
        separator: {
            height: '100px',
            //background: #8500ff;
            color: '#8500ff',
            margin: '90px 0px'
        },
       pointer: {
            //width: 200px;
            height: '50px',
            position: 'relative',
            background: '#17e8df',
            padding: '2px 35px',
            '&::after': {
                content: '""',
                position: 'absolute',
                left: '0',
                bottom: '0',
                width: '0',
                height: '0',
                borderLeft: '25px solid white',
                borderTop: '25px solid transparent',
                borderBottom: '25px solid transparent'
           },
           '&:before': {
               content: '""',
               position: 'absolute',
               right: '0px',
               bottom: '0',
               width: '0',
               height: '0',
               borderRight: '25px solid #fafafa',
               borderTop: '25px solid transparent',
               borderBottom: '25px solid transparent'
           }
        }
}));

const seperator = (props: Props) => {
    const { name } = props;
    const classes = useStyles();
    const [isInViewPort, setIsInViewPort] = React.useState(false);

    return <VizSensor onChange={(vis: any) => { setIsInViewPort(vis) }} partialVisibility={true}>
        <Grid container alignContent='center' justify='center' className={classes.separator}>
            {/*<Grid item>
                <Zoom in={isInViewPort} style={{ transitionDelay: isInViewPort ? '250ms' : '0ms' }}>
                    <Typography className={classes.nameStyle} variant='h4' align='center'> {name} </Typography>
                </Zoom>
            </Grid>*/}
            <Grid item>
                <div className={classes.pointer}>
                    <Zoom in={isInViewPort} style={{ transitionDelay: isInViewPort ? '250ms' : '0ms' }}>
                        <Typography className={classes.nameStyle} variant='h4' align='center'> {name} </Typography>
                    </Zoom>
                </div>
            </Grid>
        </Grid>
    </VizSensor>
       

}

export default seperator;
