import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import Tooltip from '@material-ui/core/Tooltip';


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
        whiteSpace: 'nowrap',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function CollapsedDrawer() {
    const classes = useStyles();

    const menuButtons = [
        {
            name: "Home",
            route: "/",
            icon: () => (<HomeIcon />)
        },
        {
            name: "Test",
            route: "/test",
            icon: () => (<NotesIcon />)
        }
    ]

    const LightTooltip = withStyles(theme => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: 11,
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
                }}
            >
                <List>
                    {menuButtons.map(item => (
                        <LightTooltip title={item.name} placement="right">
                            <ListItem button key={item.name} component={Link} to={item.route}>
                                <ListItemIcon>{item.icon()}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </LightTooltip>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
