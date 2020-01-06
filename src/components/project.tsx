import React from 'react';
import { T_Projects } from '../constants';
import { makeStyles, Theme, createStyles, Card, CardContent, Typography, Grid, Chip, Fade  } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleCard: {
            height: '250px',
            '&:hover': {
                transform: 'scale(1.01)'
            }
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            color:'#fff'
        },
        description: {
            flexGrow: 1
        },
        linkStyle: {
            textDecoration: 'none'
        }

    })
);

interface Props {
    projectItem: T_Projects,
    background: string
}
export const project = ({ projectItem, background }: Props) => {
    const classes = useStyles();
    const [isInViewPort, setIsInViewPort] = React.useState(false);

    return <VizSensor onChange={(vis: any) => { console.log('vis', vis); setIsInViewPort(vis) }} partialVisibility={true}>
        <a className={classes.linkStyle} href={projectItem.link} target='_blank'>
            <Fade in={isInViewPort}>

                <Card className={classes.styleCard} style={{ background: background }} >
                    <CardContent className={classes.cardContent}>
                        <Typography variant={"h6"}>
                            {projectItem.name}
                        </Typography>

                        <Grid container>{projectItem.labels.map((data: string, index: number) => {
                            return (<Grid item key={index}><Chip
                                label={data} /></Grid>);
                        })}
                        </Grid>

                        <p className={classes.description}>{projectItem.description}</p>

                    </CardContent>
                </Card>
            </Fade >
        </a>
        
        </VizSensor>
}

export default project;