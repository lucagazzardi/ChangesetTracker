import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import {
    Route
  } from "react-router-dom";  
import Settings from "./Settings";
import Home from "./Home";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1
    },
    drawerButton: {
        '&:hover': {
            backgroundColor: 'transparent',
            '& $listIcon': {
                color: theme.palette.action.hover,
                minWidth: 'fit-content'
            }
        },
        '&$buttonSelected, &$buttonSelected:focus, &$buttonSelected:hover': {
            backgroundColor: 'transparent',
            '& $listIcon': {
                color: theme.palette.action.hover
            }
        },
        '&:last-child': {
            position: 'fixed',
            bottom: '10px'
        }
    },
    buttonSelected: {
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '3px',
            height: '100%',
            left: '0',
            backgroundColor: theme.palette.action.hover
        }
    },
    listIcon: {
        color: theme.palette.grey[500]
    },
    noDivider: {
        borderRight: 'transparent'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function CollapsedDrawer() {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const menuButtons = [
        {
            name: "Home",
            route: "/",
            icon: () => (<HomeIcon />)
        },
        {
            name: "Settings",
            route: "/settings",
            icon: () => (<SettingsIcon />)
        }
    ]

    const LightTooltip = withStyles(theme => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 10,
        },
    }))(Tooltip);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, classes.drawerClose)}
                classes={{
                    paper: clsx(classes.drawerClose),
                    paperAnchorDockedLeft: classes.noDivider
                }}
            >
                <List className={classes.listDrawer}>
                    {
                        menuButtons.map((item, index) => (
                            <ListItem
                                key={item.name}
                                classes={{ root: classes.drawerButton, selected: classes.buttonSelected }}
                                button
                                component={Link}
                                to={item.route}
                                disableTouchRipple
                                selected={selectedIndex === index}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <LightTooltip title={item.name} placement="right">
                                    <ListItemIcon classes={{ root: classes.listIcon }}>{item.icon()}</ListItemIcon>
                                </LightTooltip>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <div className={classes.content}>                
                    <Route exact path='/' component={Home} />
                    <Route path='/settings' component={Settings} />                
            </div>
        </div>
    );
}
