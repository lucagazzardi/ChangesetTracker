import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import TemporaryDrawer from "./Drawer";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Drawer</h1>
          <ul className="header">
            
          </ul>          
          <div className="content">
            <TemporaryDrawer />
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;