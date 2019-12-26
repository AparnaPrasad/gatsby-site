import React from 'react';
import Layout from "../components/layout";
import { Doughnut } from 'react-chartjs-2';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid, Card, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleCard: {
            height: '250px'
        },
        gridOuter: {
            //border: '1px solid purple',
            //align: 'stretch'
        },
        gridInner: {
            //border: '1px solid pink'
        },
        skillsContainer: {
            height: "100%"
        }


    })
);

const skills = () => {

    const classes = useStyles();
    //console.log("skills", skills)
    return <Layout>
        <Grid
            container
            direction="row"
            className={classes.skillsContainer}
            alignItems="center"
            justify="center"
            spacing={1}
        >
            <Grid
                //spacing={4}
                item
                xs={12} sm={9} md={6} lg={6} xl={4}
                className={classes.gridOuter}
            >
                <Grid
                    spacing={1}
                    container
                    direction="row"
                    className={classes.gridOuter}
                >
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6}  item className={classes.gridInner}>
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                </Grid>
                <Grid
                    spacing={1}
                    container
                    direction="row"
                    className={classes.gridOuter}
                >
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6}  item className={classes.gridInner}>
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                //spacing={2}
                item
                xs={12} sm={9} md={6} lg={6} xl={4}
                //direction="column"
                className={classes.gridOuter}
            >
                <Grid
                    container
                    direction="column"
                    spacing={1}
                >
                    <Grid item  className={classes.gridInner} >
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                    <Grid item className={classes.gridInner}>
                        <Card className={classes.styleCard}>xs</Card>
                    </Grid>
                </Grid>
            </Grid>
            
            
        </Grid>

    </Layout>
}

export default skills;


