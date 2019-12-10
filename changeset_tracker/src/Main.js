import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import TemporaryDrawer from "./Drawer";
import Test from "./Test";
import Home from "./Home";
import CollapsedDrawer from "./NewDrawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
 
class Main extends Component {
  render() {

    const theme = createMuiTheme({
      palette: {
        type: 'dark'
      }
    });

    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <div>
            <div className="content">
              <CollapsedDrawer />
              <Route exact path='/' component={Home} />
              <Route exact path='/test' component={Test} />
            </div>
          </div>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
 
export default Main;