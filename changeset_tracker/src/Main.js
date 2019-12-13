import React from "react";
import CollapsedDrawer from "./CollapsedDrawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import {
  HashRouter
} from "react-router-dom";

export default function Main() {

    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        action: {
          hover: "#fcba03"
        },
        background: {
          paper: "#303030",
          default: "#232323"
        }
      },
    });

    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CollapsedDrawer />          
        </ThemeProvider>
      </HashRouter>   
    );

}