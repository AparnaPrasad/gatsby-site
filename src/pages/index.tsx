import React from "react"
import Layout from "../components/layout"
import { Grid, Typography } from "@material-ui/core"

const IndexPage = () => (
    
    <Layout>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ display: "flex", height: "100%" }}
        >
                <Typography variant={"h5"}>
                    Hi, I am Aparna. I am a full stack web developer
                </Typography>
                <Typography variant={"body1"}>
                    I have 4+ years of experience developing web applications.
                </Typography>
               
        </Grid>

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ display: "flex", height: "100%" }}
        >
            <Typography variant={"h5"}>
                Hi, I am Aparna. I am a full stack web developer
                </Typography>
            <Typography variant={"body1"}>
                I have 4+ years of experience developing web applications.
                </Typography>

        </Grid>
    </Layout>
   
)

export default IndexPage
