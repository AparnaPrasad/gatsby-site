import { List, ListItem, ListItemIcon, ListItemText, Slide, makeStyles, Theme,createStyles } from "@material-ui/core";
import { T_MainSkill } from "../constants";
import Check from '@material-ui/icons/Check';
import React from 'react';
import VizSensor from 'react-visibility-sensor';

interface Props {
    items: T_MainSkill[],
    slideDirection: 'left' | 'right'
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconColor: {
            color: '#4fc73e'
        }
    })
);


const toolsList = (props: Props) => {
    const { items, slideDirection } = props;
    const [isInViewPort, setIsInViewPort] = React.useState(false);
    const classes = useStyles();
    return <VizSensor onChange={(vis: any) => { console.log('vis', vis); setIsInViewPort(vis) }} partialVisibility={true}>
        <Slide direction={slideDirection} in={isInViewPort}>
            <List>
                {items.map((item) => (<ListItem key={item.name}>
                    <ListItemIcon>
                        <Check className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText
                    primary={item.name}
                    //secondary={secondary ? 'Secondary text' : null}
                />
                </ListItem>))}
            </List>
        </Slide>
    </VizSensor>
}

export default toolsList;