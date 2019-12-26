import React from "react"
import { tabItems } from "../constants"
import Container from "@material-ui/core/Container"
import AppbarContainer from './appbarContainer';
import { ThemeProvider, createMuiTheme, createPalette, Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import createTypography from "@material-ui/core/styles/createTypography";

//import { Link } from "gatsby"
interface Props {
    children?: any,
    //location: any
}

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
    typography: {
        fontFamily: "Open Sans"
    }
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto'
        },
        appHeader: {
            //flexShrink:0
        },
        appContent: {
            flexGrow: 1,
            //overflow: 'auto'
        }

    })
);

const Layout = ({ children }: Props) => {
    const styles = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.appContainer}>
                <div className={styles.appHeader}>
                    <AppbarContainer />
                </div>

                <Container className={styles.appContent}>
                    {children}
                </Container>
                
            </div>
        </ThemeProvider>
    );
}

export default Layout