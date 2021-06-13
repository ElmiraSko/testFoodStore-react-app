import React from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function CategoryItem(props) {
    const classes = useStyles();

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
                {strCategory}
            </Typography>                    
            <Link to={`/category/${strCategory}`}>
                <img src={strCategoryThumb} 
                    alt='img'
                    style={{width: '200px',}}/>
            </Link> 
                {/* <div>
                    {strCategoryDescription}
                </div>                        */}
        </Paper>
    )
}
   