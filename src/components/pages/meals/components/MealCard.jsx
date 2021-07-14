import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
      },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      title: {
        fontSize: 14,
        height: '2rem',
      },
  }));

export default function MealCard(props) {
    const {strMeal, strMealThumb, idMeal, buyButtonHandler, recipeButtonHandler} = props
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} style={{color: '#FFB800'}} gutterBottom>
                    {strMeal}
                </Typography>
            </CardContent>    
            <CardMedia
                className={classes.media}
                image={strMealThumb}
                title={strMeal}
            />            
            <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button 
                    size="small" 
                    style={{color: '#7a45d6'}}
                    onClick={() => buyButtonHandler({name: strMeal, id: idMeal, count: 1})}>
                        Buy
                </Button>
                <Link to={`/meal-recipe/${idMeal}`}
                    style={{textDecoration: 'none', }}>
                    <Button 
                    size="small" 
                    style={{color: '#7a45d6'}}>
                        Cooking recipe
                    </Button>                        
                </Link>
            </CardActions>    
        </Card>                
    )
}