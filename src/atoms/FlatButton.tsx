import * as React from 'react';
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

export interface Props {
    children: React.ReactNode
}

const FlatButton: React.FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.button}>
            {props.children}
        </Button>
    )
};

export default FlatButton;
