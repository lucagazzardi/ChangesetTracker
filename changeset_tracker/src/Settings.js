import React from "react";
import { makeStyles } from "@material-ui/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
    themeHeading: {
        fontSize: "28px",
        fontWeight: "bold",
        '&$focused' : {
            color: theme.palette.text.secondary
        }
    },
    focused: {}
}));

export default function Settings() {  

  const [value, setValue] = React.useState('dark');

  const handleChange = event => {
    setValue(event.target.value);
    //this.props.onThemeChange(value);
  };

  const classes = useStyles();

  return (
      <div className={classes.content}>
          <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="h1" classes={{ root: classes.themeHeading, focused: classes.focused }}>Theme</FormLabel>

              <RadioGroup aria-label="theme-type" name="theme-type" value={value} onChange={handleChange}>
                  <FormControlLabel value="dark" control={<Radio color="secondary" />} label="Dark" />
                  <FormControlLabel value="light" control={<Radio color="secondary" />} label="Light" />
              </RadioGroup>
          </FormControl>
      </div>
  );

}