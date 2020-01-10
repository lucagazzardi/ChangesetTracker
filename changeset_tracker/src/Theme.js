import React, { Component } from "react";
import { useTheme, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Settings } from "./Settings"

  export const theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#fcba03"
      },
      type: 'dark',
      action: {
        hover: "#fcba03"
      },
      background: {
        paper: value === "dark" ? "#333333" : "#dedede",
        default: value === "dark" ? "#1f1f1f" : "#f0f0f0"
        // paper: "#333333",
        // default: "#1f1f1f"
      }
    },
  });
