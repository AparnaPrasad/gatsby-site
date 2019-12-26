import React from "react";
import { IconButton, makeStyles, createStyles, Theme, Avatar } from "@material-ui/core";
import { GitHub, LinkedIn, Twitter, AccountCircle } from "@material-ui/icons";
import { useStaticQuery, graphql } from "gatsby";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabLinkStyle: {
            color: '#ffffff',
            textDecoration: "none"
        },
        profilePic: {
            display: 'flex',
            [theme.breakpoints.between('sm','md')]: {
                display: 'none'
            }

        },
        avatarStyle: {
            margin: '12px'
        }
    }));

const SocialMedia = () => {
    const classes = useStyles();
    const socialMediaProps = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    githublink
                    linkedInLink
                    twitterLink
                }
            },
            placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    
    const metadata = socialMediaProps?.site?.siteMetadata;
    const menuId = 'primary-search-account-menu';
    console.log("socialMediaProps", socialMediaProps);
    if (metadata) {
        const { githublink, linkedInLink, twitterLink } = metadata;
        return <React.Fragment>
            <a href={githublink} target="_blank" className={classes.tabLinkStyle}>
                <IconButton aria-label="github" color="inherit">
                    <GitHub />
                </IconButton>
            </a>
            <a href={linkedInLink} target="_blank" className={classes.tabLinkStyle}>
                <IconButton aria-label="linkedIn" color="inherit">
                    <LinkedIn />
                </IconButton>
            </a>
            <a href={twitterLink} target="_blank" className={classes.tabLinkStyle}>
                <IconButton aria-label="twitter" color="inherit">
                    <Twitter />
                </IconButton>
            </a>
            <Avatar className={classes.avatarStyle} alt="Apbs" src={socialMediaProps.placeholderImage.childImageSharp.fluid.src} />
        </React.Fragment>
    }
    return null;

    
}

export default SocialMedia;