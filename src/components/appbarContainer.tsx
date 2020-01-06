import React /*{ useEffect }*/ from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';
//import { Home, ContactMail, Work, Brush, Web } from '@material-ui/icons';
import { useScrollTrigger, CssBaseline } from '@material-ui/core';
//import {/* tabItems,*/ menuIconName } from '../constants';
import { Link } from "gatsby";
import SocialMedia from './socialMedia';
//import appbarStyles from './appbar.module.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        
        inputRoot: {
            color: 'inherit',
        },
        
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        tabLinkStyle: {
            color: '#ffffff',
            textDecoration: "none"
        },
        mobileMenuLinkStyle: {
            color: '#333333',
            textDecoration: "none"
        },
        mobileMenuActive: {
            "& li": {
                borderLeft: '2px solid red'
            }
        }
        
    }),
);

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    //const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    
    //const isMenuOpen = Boolean(anchorEl);
    //const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    //const handleMobileMenuClose = () => {
    //    setMobileMoreAnchorEl(null);
    //};

    //const handleMenuClose = () => {
    //    setAnchorEl(null);
    //    handleMobileMenuClose();
    //};

    //const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //    setMobileMoreAnchorEl(event.currentTarget);
    //};

    //useEffect(() => {
    //    //console.log("location change!!", location);
    //    setTabValue(tabItems.findIndex((tab) => (tab.link === location.pathname)));
    //}, [location])
    
    //const getMenuIcon = (iconName: menuIconName) => {
    //    switch (iconName) {
    //        case menuIconName.CONTACT:
    //            return <ContactMail />
    //        case menuIconName.EXPERIENCE:
    //            return <Work />
    //        case menuIconName.HOME:
    //            return <Home />
    //        case menuIconName.PROJECTS:
    //            return <Web />
    //        case menuIconName.SKILLS:
    //            return <Brush />
    //    }
    //}

    //const mobileMenuId = 'primary-search-account-menu-mobile';
    //const renderMobileMenu = (
        
    //    <Menu
    //        anchorEl={mobileMoreAnchorEl}
    //        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //        id={mobileMenuId}
    //        keepMounted
    //        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //        open={isMobileMenuOpen}
    //        onClose={handleMobileMenuClose}
    //    >
    //        {tabItems.map((tabItem, index) => (
    //            <Link to={tabItem.link} key={index} className={classes.mobileMenuLinkStyle} activeClassName={classes.mobileMenuActive}>
    //                <MenuItem selected={index === tabValue}>
    //                    <IconButton aria-label={tabItem.name} color="inherit" >
    //                        {getMenuIcon(tabItem.iconName)}
    //                    </IconButton>
    //                    <p>{tabItem.name}</p>
    //                </MenuItem>
    //        </Link>))}
    //        </Menu>
       
    //);

    //function a11yProps(index: any) {
    //    return {
    //        id: `simple-tab-${index}`,
    //        'aria-controls': `simple-tabpanel-${index}`,
    //    };
    //}

    

    //const [tabValue, setTabValue] = React.useState(0);

   

    //console.log('tabValue:', tabValue);
    return (
        <div className={classes.grow}>
           <CssBaseline />
            <ElevationScroll>
                <AppBar /* position="fixed" position="static" elevation={1}*/>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap>
                            <Link to="/" className={classes.tabLinkStyle} >   
                                Aparna B S
                            </Link>
                        </Typography>

                        <div className={classes.grow} />
                        {/*<div className={classes.sectionDesktop}>
                            <Tabs value={tabValue}  aria-label="simple tabs example">
                                {tabItems.map((tab, index) => (
                                    <Tab key={index} {...a11yProps(index)} label={tab.name} component={Link} to={tab.link} />                              
                                ))}
                            </Tabs>
                        </div>*/}
                        <SocialMedia />
                        {/*<div className={classes.sectionMobile}>
                       
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                            </div>*/}
                    
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />  
            {/*renderMobileMenu*/}
                
            
        </div>
    );
}


interface Props {
    children: React.ReactElement,
    window?: () => Window;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    //// Note that you normally won't need to set the window ref as useScrollTrigger
    //// will default to window.
    //// This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}