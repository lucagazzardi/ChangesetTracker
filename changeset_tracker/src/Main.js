import React from "react";
import CollapsedDrawer from "./CollapsedDrawer";
import { ThemeProvider } from "@material-ui/core";
import {
  HashRouter
} from "react-router-dom";
import { theme } from "./Theme"

export default function Main() {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CollapsedDrawer />          
        </ThemeProvider>
      </HashRouter>   
    );

}