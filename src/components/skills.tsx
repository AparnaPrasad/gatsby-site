//import React from 'react';
//import Layout from "../components/layout";
//import { Doughnut, Chart, HorizontalBar} from 'react-chartjs-2';
//import { useStaticQuery, graphql } from 'gatsby';
//import { Grid, Card, Typography, makeStyles, Theme, createStyles, CardContent } from '@material-ui/core';
//import VizSensor  from 'react-visibility-sensor';
//import { element } from 'prop-types';
//import { CircularProgressbar } from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';

//const data = {
//    labels: [
//        'progress'
//    ],
//    datasets: [{
//        data: [8],
//        backgroundColor: [
//            '#FF6384',
//            //'#FFCE56'
//        ],
//        hoverBackgroundColor: [
//            '#FF6384',
//            //'#FFCE56'
//        ]
//    }]
//};


//const dataHorizontal = {
//    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//    datasets: [
//        {
//            label: 'My First dataset',
//            backgroundColor: 'rgba(255,99,132,0.2)',
//            borderColor: 'rgba(255,99,132,1)',
//            borderWidth: 1,
//            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//            hoverBorderColor: 'rgba(255,99,132,1)',
//            data: [65, 59, 80, 81, 56, 55, 40]
//        }
//    ]
//};

//const useStyles = makeStyles((theme: Theme) =>
//    createStyles({
//        styleCard: {
//            height: '250px'
//        },
//        gridOuter: {
//            //border: '1px solid purple',
//            //align: 'stretch'
//        },
//        gridInner: {
//            //border: '1px solid pink'
//        },
//        skillsContainer: {
//            //height: "100%"
//        }


//    })
//);

//var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
//Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//    draw: function () {
//        originalDoughnutDraw.apply(this, arguments);

//        var chart = this.chart;
//        var width = chart.chart.width,
//            height = chart.chart.height,
//            ctx = chart.chart.ctx;

//        var fontSize = (height / 114).toFixed(2);
//        ctx.font = fontSize + "em sans-serif";
//        ctx.textBaseline = "middle";

//        /*var sum = 0;
//        for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
//            sum += chart.config.data.datasets[0].data[i];
//        }*/
//        var centerConfig = chart.config.options.elements.center;
//        var text = centerConfig.text,
//         color = centerConfig.color || '#000',
//         //sidePadding = centerConfig.sidePadding || 20,
//         //sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2),
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//        ctx.fillStyle = color;
//        ctx.fillText(text, textX, textY);
//    }
//});

//const Skills = () => {
//    const [isInViewPort, setIsInViewPort] = React.useState(false);
//    const classes = useStyles();
   
//    return <VizSensor onChange={(vis) => { console.log('vis', vis); setIsInViewPort(vis) }}>
//        <React.Fragment>
//            <Typography variant={"h5"} >Skills</Typography>
//            <Grid
//                container
//                direction="row"
//                className={classes.skillsContainer}
//                alignItems="center"
//                justify="center"
//                spacing={1}
//                style={{height: "100%" }}
//            >
//                <Grid
//                    //spacing={4}
//                    item
//                    xs={12} sm={9} md={6} lg={6} xl={4}
//                    className={classes.gridOuter}
//                >
//                    <Grid
//                        spacing={1}
//                        container
//                        direction="row"
//                        className={classes.gridOuter}
//                    >
//                        <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
//                            <Card className={classes.styleCard}>
//                                <CardContent>
//                                    <Typography align="center" variant={"h6"}>React</Typography>
//                                    <CircularProgressbar
//                                        value={isInViewPort ? 0.8 : 0}
//                                        maxValue={1}
//                                        text={`${0.8 * 100}%`}
//                                        strokeWidth={2}
//                                        styles={{
//                                            path: {
//                                                // Path color
//                                                //stroke: `rgba(62, 152, 199, ${percentage / 100})`,
//                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//                                                strokeLinecap: 'butt',
//                                                // Customize transition animation
//                                                transition: 'stroke-dashoffset 2s ease 0.5s',
//                                                // Rotate the path
//                                                //transform: 'rotate(0.25turn)',
//                                                transformOrigin: 'center center',
//                                            },
//                                            // Customize the circle behind the path, i.e. the "total progress"
//                                            trail: {
//                                                // Trail color
//                                                //stroke: '#d6d6d6',
//                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//                                                strokeLinecap: 'butt',
//                                                // Rotate the trail
//                                                //transform: 'rotate(0.25turn)',
//                                                transformOrigin: 'center center',
//                                            },
//                                        }} />
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                        <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
//                            <Card className={classes.styleCard}>
//                                <CardContent>
//                                    <Typography align="center" variant={"h6"}>React</Typography>
//                                    <Doughnut options={{
//                                        elements: {
//                                            center: {
//                                                text: '80%',
//                                                color: '#FF6384', // Default is #000000
//                                                fontStyle: 'Arial', // Default is Arial
//                                                sidePadding: 20 // Defualt is 20 (as a percentage)
//                                            }
//                                        }
//                                    }} legend={false} redraw={isInViewPort} data={data} />
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                    </Grid>
//                    <Grid
//                        spacing={1}
//                        container
//                        direction="row"
//                        className={classes.gridOuter}
//                    >
//                        <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
//                            <Card className={classes.styleCard}>
//                                <CardContent>
//                                    <Typography align="center" variant={"h6"}>React</Typography>
//                                    <Doughnut options={{
//                                        elements: {
//                                            center: {
//                                                text: '80%',
//                                                color: '#FF6384', // Default is #000000
//                                                fontStyle: 'Arial', // Default is Arial
//                                                sidePadding: 20 // Defualt is 20 (as a percentage)
//                                            }
//                                        }
//                                    }} legend={false} redraw={isInViewPort} data={data} />
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                        <Grid xs={6} sm={6} md={6} lg={6} xl={6} item className={classes.gridInner}>
//                            <Card className={classes.styleCard}>
//                                <CardContent>
//                                    <Typography align="center" variant={"h6"}>React</Typography>
//                                    <Doughnut options={{
//                                        elements: {
//                                            center: {
//                                                text: '80%',
//                                                color: '#FF6384', // Default is #000000
//                                                fontStyle: 'Arial', // Default is Arial
//                                                sidePadding: 20 // Defualt is 20 (as a percentage)
//                                            }
//                                        }
//                                    }} legend={false} redraw={isInViewPort} data={data} />
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                    </Grid>
//                </Grid>
//                <Grid
//                    //spacing={2}
//                    item
//                    xs={12} sm={9} md={6} lg={6} xl={4}
//                    //direction="column"
//                    className={classes.gridOuter}
//                >
//                    <Grid
//                        container
//                        direction="column"
//                        spacing={1}
//                    >
//                        <Grid item className={classes.gridInner} >
//                            <Card className={classes.styleCard}>
//                                <CardContent>
//                                    <Typography align="center" variant={"h6"}>React</Typography>
//                                    <HorizontalBar data={dataHorizontal} />
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                        <Grid item className={classes.gridInner}>
//                            <Card className={classes.styleCard}>xs</Card>
//                        </Grid>
//                    </Grid>
//                </Grid>
//                </Grid >
//        </React.Fragment>
//    </VizSensor>

    
//}

//export default Skills;
export { };

