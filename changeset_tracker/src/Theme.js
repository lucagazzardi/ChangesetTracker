import React, { Component } from "react";
import { useTheme, createMuiTheme, ThemeProvider } from "@material-ui/core";

export default function DarkTheme() {
    
    const theme = createMuiTheme({
                palette: {
                type : 'dark',
                },
            });

    function EditTheme(){
        const theme = useTheme();

        return (
            <ThemeProvider theme={theme}>
              <EditTheme />
            </ThemeProvider>
          );
    }        
}