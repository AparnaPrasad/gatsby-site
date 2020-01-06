import React from 'react';
import { Grid, Card, Typography, createStyles, Theme/*, makeStyles, Theme, createStyles*/, CardContent, makeStyles } from '@material-ui/core';
import { mainSkill, allSkills, toolsList1, toolsList2, graphColors } from '../constants';
//import { element } from 'prop-types';
import CircularProgress from './circilarProgress';
import HorizontalProgress from './horizontalProgress'
import ToolsList from './toolsList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            padding:'20px'
        },
        titleText: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        graphContainer: {
            padding: '20px'
        }
    })
);



const Skills = () => {
    const classes = useStyles();
    return <React.Fragment>
            <Grid
                container
                direction="column"
                spacing={5}
                alignContent="center"
                justify="center"
                >
                <Grid item xs={10} sm={10} md={12} lg={12} xl={12} >
                    <Grid container direction="row" spacing={1} justify="center">
                        {mainSkill.map((skill, index) => (<Grid key={index} item xs={6} sm={6} md={3} lg={3} xl={3} >
                            <Card>
                                <CardContent>
                                    <Grid container direction="column" >
                                        <Grid item className={classes.title}>
                                            <Typography className={classes.titleText} align="center">{skill.name}</Typography>
                                        </Grid>
                                        <Grid item className={classes.graphContainer}>
                                            <CircularProgress skill={skill} color={graphColors[index]} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>))}
                    </Grid>
                </Grid>

                <Grid item xs={10} sm={10} md={12} lg={12} xl={12}>
                        <Card >
                    <CardContent>
                        <Typography align="center" className={classes.title + " " + classes.titleText}>Languages and Frameworks</Typography>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {allSkills.skillSet1.map((skill) => (<HorizontalProgress key={skill.name} skill={skill} />))}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        {allSkills.skillSet2.map((skill) => (<HorizontalProgress key={skill.name} skill={skill} />))}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={10} sm={10} md={12} lg={12} xl={12} >
                    
                            <Card>
                                <CardContent>
                                    <Typography align="center" className={classes.title + " " + classes.titleText}>Tools</Typography>
                                    <Grid container direction="row">
                                        <Grid item xs={10} sm={6} md={6} lg={6} xl={6}>
                                        <ToolsList items={toolsList1} slideDirection={'right'} />
                                        </Grid>
                                        <Grid item xs={10} sm={6} md={6} lg={6} xl={6}>
                                        <ToolsList items={toolsList2} slideDirection={'left'} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                </Grid>
            </Grid>
        </React.Fragment>


}

export default Skills;


