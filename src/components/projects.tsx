import React from 'react';
import { Grid } from '@material-ui/core';
import { projectsList, graphColors } from '../constants';
import Project from './project';


const projects = () => {
    return <Grid container spacing={1} justify='center'>
            {projectsList.map((proj, index) => (<Grid key={index} item xs={10} sm={8} md={5} lg={4} xl={4}>
                    <Project projectItem={proj} background={graphColors[index%4]} />
                    </Grid>))}
                </Grid>
}
        
export default projects;