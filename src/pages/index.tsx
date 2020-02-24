import React from "react"
import Layout from "../components/layout"
//import { Grid, Typography } from "@material-ui/core"
import Skills from '../components/skills2';
import Intro from '../components/intro';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Separator from '../components/Separator';
const IndexPage = () => (
    <Layout>
        <Intro />
        <Separator name={"skills"}/>
        <Skills />
        <Separator name={"education & experience"} />
        <Experience />
        <Separator name={"projects"} />
        <Projects />
        {/*<Separator />
        <Contact/>*/}
    </Layout>
)

export default IndexPage
