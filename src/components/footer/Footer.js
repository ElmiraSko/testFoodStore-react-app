import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    footer: {
        minHeight: '60px',
        padding: "5px 0",
        marginTop: '50px',
        background: 'rgba(122, 69, 214, 0.5)',
        // boxShadow: '0 0 3px 2px rgba(122, 69, 214, 0.5)',
        textAlign: 'center',
        color: '#ffffff',
        lineHeight: '2rem'
    },
}));

export default function Footer() {
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <div>
            {'© '}
            {new Date().getFullYear()}
            {' Test shop'}               
            </div>
        </div>
    )
}