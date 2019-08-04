import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const FlatButton = () => {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.button}>
            Default
      </Button>
    )
}
