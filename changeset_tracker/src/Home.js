import React from "react";
import { makeStyles } from "@material-ui/styles";

export default function Home() {

  const classes = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))

  return (
    <div className={classes.content}>
      HOMEEEE
    </div>
  );

}