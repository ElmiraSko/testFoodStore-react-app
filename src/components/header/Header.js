import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CustomizedBadges from './CustomizedBadges';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin: 'auto',
  },
  headerLink: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
  },
  offset: theme.mixins.toolbar,
}));

const appBarStyle = {
  display: 'flex', 
  justifyContent: 'space-between', 
  background: '#FFB800',
  height: '80px',  
}
export default function Header(props) {
  const classes = useStyles();
  const {mealCount} = props

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{background: '#a67800',}}>
        <Toolbar style={appBarStyle}>
          <Link to={'/'} className={classes.headerLink} >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <i>TestShop</i>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Все категории
            </Typography>
          </Link>
          <Link to={'/check'} className={classes.headerLink} >
          <CustomizedBadges mealCount={mealCount}/>
          </Link>         
        </Toolbar>
        <div style={{height: '3px'}}/>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
