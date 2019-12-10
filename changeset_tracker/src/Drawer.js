import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },    
    hide: {
        display: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    underAppbar: {
        ...theme.mixins.toolbar
    }
}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const menuButtons = [
        {
            name: "Home",
            route: "/",
            icon: () => ( <HomeIcon /> )
        },
        {
            name: "Test",
            route: "/test",
            icon: () => ( <NotesIcon /> )
        }
    ] 

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={toggleDrawer(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {menuButtons.map(item => (
                    <ListItem component={Link} to={item.route} button key={item.name}>
                        <ListItemIcon>{item.icon()}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: state,
                })}
                color="default"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={clsx(classes.menuButton, state && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>                    
                </Toolbar>
            </AppBar>
            <div className={ classes.underAppbar }>

            </div>
            <Drawer open={state}>
                {sideList()}
            </Drawer>
        </div>
    );
}
